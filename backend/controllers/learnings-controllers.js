import { validationResult } from 'express-validator';
import fs from "fs";

import { HttpError } from '../models/http-error.js';
//import { FingSpell } from '../models/fingerSpelling.js';
import { learningsModule } from '../models/learnings.js';
import { userModule } from '../models/user.js';
import mongoose from 'mongoose';
import { log } from 'console';

export const getLearningsById = async (req, res, next) => {
  const learningId = req.params.learningId;
  let learnings;
  try {

    learnings = await learningsModule.findById(learningId);

  } catch (err) {
    const error = new HttpError(
      `Something went wrong, Could not find the Learning. ${err}`, 500
    );
    return next(error);
  }
  if (!learnings || learnings.length === 0) {
    //    return res.status(404).json({message:`Cannot find the Learning resource ${learningId}`});
    const error = new HttpError
      (`Cannot find the Learnings resource ${learningId}`,
        404);
    return next(error);
  }

  res.json({ learnings: learnings.toObject({ getters: true }) }); // can also be written as ({learning});
};

export const getLearningByUserId = async (req, res, next) => {
  const userId = req.params.uid;

  let learnings
  try {

    learnings = await learningsModule.find({ creator: userId });

  } catch (err) {
    const error = new HttpError(
      'Something went wrong, Could not find a learning .', 500
    );
    return next(error);
  }
  if (!learnings || learnings.length === 0) {

    return next(
      new HttpError(`Cannot find the Learning resource for the provided user`, 404)
    );
    // return res.status(404).json({message:`Cannot find the Learning resource ${userId}`});
  }

  res.json({ learnings: learnings.map(learnings => learnings.toObject({ getters: true })) });

};

export const createLearning = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return next(new HttpError('Invalid inputs passed, please check your data.', 422));
  }

  const { title, description } = req.body;

  const createdLearning = new learningsModule({
    title,
    description,
    image: req.file.path,
    creator: req.userData.userId,
  });

  let user;
  try {
    // Find the user by ID
    user = await userModule.findById(req.userData.userId);
  } catch (err) {
    console.error('Error during Login: ', err);
    const error = new HttpError('Creating learning failed, please try again.', 500);
    return next(error);
  }

  if (!user) {
    const error = new HttpError('Could not find user for the provided ID.', 404);
    return next(error);
  }

  // Check if the user has the ADMIN role
  if (!user.roles || !user.roles.includes('ADMIN')) {
    const error = new HttpError('You are not authorized to create new learnings.', 403);
    return next(error);
  }

  try {
    // Start a session for atomic operations
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdLearning.save({ session: sess });
    user.learnings.push(createdLearning);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    console.error('Error during learning creation: ', err);
    const error = new HttpError(`Creating learning failed, please try again. ${err}`, 500);
    return next(error);
  }

  res.status(201).json({ learning: createdLearning });
};


export const updateLearning = async (req, res, next) => {
  console.log(req.body); // Log the request body

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return next(new HttpError("Invalid inputs passed, please check your data.", 422));
  }

  const { title, description } = req.body;
  const learningId = req.params.lid; // Get the learning ID from URL parameters

  let learning;

  try {
    learning = await learningsModule.findById(learningId);
  } catch (err) {
    const error = new HttpError(`Something went wrong, Could not update the Learning. ${err}`, 500);
    return next(error);
  }

  // Check if the user is an Admin
  const user = await userModule.findById(req.userData.userId);
  if (!user.roles || !user.roles.includes('ADMIN')) {
    // If not Admin, check if the user is the creator
    if (learning.creator.toString() !== req.userData.userId) {
      const error = new HttpError('You are not allowed to edit this learning.', 401);
      return next(error);
    }
  }

  // Update the learning instance
  learning.title = title;
  learning.description = description;

  try {
    await learning.save(); // Save changes
  } catch (err) {
    const error = new HttpError('Something went wrong, could not update learning.', 500);
    return next(error);
  }

  // Send the updated learning as a response
  res.status(200).json({ learning: learning.toObject({ getters: true }) });
};


export const deleteLearning = async (req, res, next) => {
  const learningId = req.params.lid.trim();
  let learning;

  try {
    // Find the learning and populate the creator
    learning = await learningsModule.findById(learningId).populate('creator');
  } catch (err) {
    console.error(err);
    const error = new HttpError('Something went wrong, could not delete learning.', 500);
    return next(error);
  }

  if (!learning) {
    const error = new HttpError('Could not find learning for this id.', 404);
    return next(error);
  }

  // Check if the user is an Admin
  const user = await userModule.findById(req.userData.userId);
  if (!user.roles || !user.roles.includes('ADMIN')) {
    // If not Admin, check if the user is the creator
    if (learning.creator.id !== req.userData.userId) {
      const error = new HttpError('You are not allowed to delete this learning.', 401);
      return next(error);
    }
  }

  const imagePath = learning.image;

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    // Delete the learning
    await learning.deleteOne({ session: sess });
    learning.creator.learnings.pull(learning);
    await learning.creator.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError('Something went wrong, could not delete learning.', 500);
    return next(error);
  }

  // Delete the associated image file
  fs.unlink(imagePath, err => {
    console.log(err);
  });

  res.status(200).json({ message: 'Deleted Learning.' });
};


//   exports.getLearningById=getLearningById;
//   exports.getLearningByUserId=getLearningByUserId;
