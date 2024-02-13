import { v4 as uuid } from 'uuid';
import { validationResult } from 'express-validator';
// Rest of your code...

import {HttpError} from '../models/http-error.js';

let DUMMY_LEARNINGS=[ 

    {
      id:'l1',
    Alphabet: "A",
    handShape: {
      imageUrl: "https://previews.123rf.com/images/belchonock/belchonock1309/belchonock130901518/22020912-finger-spelling-the-alphabet-in-american-sign-language-asl-letter-a.jpg",
      description: "Make a fist with your thumb pointing upwards."
      },
    videoUrl: "https://example.com/videos/finger-spelling-A.mp4",
    mnemonicTip: "Think of an antenna on top of your head.",
    creator: 'u1'
    }
  ];



  export const getLearningsById=(req,res,next)=>{
    const  learningId = req.params.learningId;
    const learnings= DUMMY_LEARNINGS.filter(l=>{
        return l.id=== learningId;
    });
        if(!learnings || learnings.length === 0){  
        //    return res.status(404).json({message:`Cannot find the Learning resource ${learningId}`});
        throw new HttpError(`Cannot find the Learnings resource ${learningId}`,404);   
      
        
        
    }

    res.json({learnings: learnings}); // can also be written as ({learning});
};

export const getLearningByUserId=(req,res,next)=>{
    const userId=req.params.uid;
  
    const  learningsByUser=DUMMY_LEARNINGS.find(learning=>{
  return learning.creator === userId; 
    }); 
    if(!learningsByUser){  
         
          return next(
             new HttpError(`Cannot find the Learning resource ${userId}`)
             );
      // return res.status(404).json({message:`Cannot find the Learning resource ${userId}`});
   }
  
  res.json({learningsByUser});
  
  };

  export const createLearning = (req, res, next) => {
    const errors=validationResult(req);
    if(!errors.isEmpty()){
      console.log(errors);
      throw new HttpError('Invalid inputs passed, please check your data.',422);

    }

    const { Alphabet, handShape, videoUrl, mnemonicTip, creator } = req.body;
    const createdLearning = {
      id:uuid(),
      Alphabet,
      handShape: {
        imageUrl: handShape.imageUrl,
        description: handShape.description,
      },
      videoUrl,
      mnemonicTip,
      creator,
    };
    DUMMY_LEARNINGS.push(createdLearning);
    res.status(201).json({learning:createdLearning}) ;
  };
  export const updateLearning = (req, res, next) => {
    const errors=validationResult(req);
    if(!errors.isEmpty()){
      console.log(errors);
      throw new HttpError('Invalid inputs passed, please check your data.',422);

    }

    const { Alphabet, handShape,  videoUrl, mnemonicTip } = req.body;
    const learningId = req.params.lid;
  
    // Assuming DUMMY_LEARNINGS is an array of learning objects
    const updateLearning = { ...DUMMY_LEARNINGS.find(l => l.id === learningId) };
  
    if (!updateLearning) {
      // Handle the case where the learning with the given ID is not found
      return res.status(404).json({ message: `Learning with ID ${learningId} not found` });
    }
  
    const learningIndex = DUMMY_LEARNINGS.findIndex(l => l.id === learningId);
  
    updateLearning.Alphabet = Alphabet;
    updateLearning.handShape = {
      imageUrl: handShape.imageUrl,
      description: handShape.description // Add other properties as needed
    };
    updateLearning.videoUrl = videoUrl;
    updateLearning.mnemonicTip = mnemonicTip;// Fix property name here
  
    // Update the learning in the DUMMY_LEARNINGS array
    DUMMY_LEARNINGS[learningIndex] = updateLearning;
  
    // Send the updated learning as a response
    res.status(200).json({ learning: updateLearning });
  };
  

  export const  deleteLearning = (req, res, next) => {
    const  learningId = req.params.lid;
    if(!DUMMY_LEARNINGS.find(l=>l.id === learningId)){
        throw new HttpError(`Could not find a learning for that id. ${id}`,422);
    }
    DUMMY_LEARNINGS=DUMMY_LEARNINGS.filter(l=> l.id !==learningId);
    res.status(200).json({ message: 'Deleted Learnings.' });
  };
     



//   exports.getLearningById=getLearningById;  
//   exports.getLearningByUserId=getLearningByUserId;
