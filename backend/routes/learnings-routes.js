import express from "express";

import { HttpError } from '../models/http-error.js';

const router=express.Router();
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

router.get('/:learningId',(req,res,next)=>{
    const  learningId = req.params.learningId;
    const learning= DUMMY_LEARNINGS.find(l=>{
        return l.id=== learningId;
    });
        if(!learning){  
        //    return res.status(404).json({message:`Cannot find the Learning resource ${learningId}`});
        throw new HttpError(`Cannot find the Learning resource ${learningId}`,404);   
      
        
        
    }

    res.json({learning: learning}); // can also be written as ({learning});
});

router.get('/user/:uid',(req,res,next)=>{
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

});

export default router; 