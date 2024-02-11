import { v4 as uuid } from 'uuid';

// Rest of your code...

import {HttpError} from '../models/http-error.js';

const DUMMY_LEARNINGS=[

    {
      id:'l1',
    Alphabet: "A",
    handShap: {
      imageUr: "https://previews.123rf.com/images/belchonock/belchonock1309/belchonock130901518/22020912-finger-spelling-the-alphabet-in-american-sign-language-asl-letter-a.jpg",
      description: "Make a fist with your thumb pointing upwards."
      },
    videoUr: "https://example.com/videos/finger-spelling-A.mp4",
    mnemonicTip: ["Think of an antenna on top of your head."],
    creator: 'u1'
    }
  ];



  export const getLearningById=(req,res,next)=>{
    const  learningId = req.params.learningId;
    const learning= DUMMY_LEARNINGS.find(l=>{
        return l.id=== learningId;
    });
        if(!learning){  
        //    return res.status(404).json({message:`Cannot find the Learning resource ${learningId}`});
        throw new HttpError(`Cannot find the Learning resource ${learningId}`,404);   
      
        
        
    }

    res.json({learning: learning}); // can also be written as ({learning});
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
    const { Alphabet, handShape, videoUrl, mnemonicTips, creator } = req.body;
    const createdLearning = {
      id:uuid(),
      Alphabet,
      handShape: {
        imageUrl: handShape.imageUrl,
        description: handShape.description,
      },
      videoUrl,
      mnemonicTips,
      creator,
    };
    DUMMY_LEARNINGS.push(createdLearning);
    res.status(201).json({learning:createdLearning}) ;
  };
//   exports.getLearningById=getLearningById;  
//   exports.getLearningByUserId=getLearningByUserId;
