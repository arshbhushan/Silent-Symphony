import { mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { learningsModule } from '../models/learnings.js';
// Connect to your MongoDB database
const db = mongoose.connect(mongoDBURL);

// Fetch all learnings from the learnings collection
learnings = await learningsModule.find({});
learnings = db.learnings.find();

// Iterate through each learning document
learnings.forEach((learning) => {
  const creatorId = learning.creator; // Assuming the field is named "creator"
  const learningId = learning._id;

  // Update the creators collection to include this learning in the creator's learnings array
  db.creators.updateOne(
    { _id: creatorId }, // Match the creator by their _id
    { $addToSet: { learnings: learningId } } // Add the learningId to the learnings array
  );
});

print("All learnings have been added to their respective creators.");