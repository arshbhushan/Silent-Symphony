import mongoose from "mongoose";

const learnings = mongoose.Schema({
title : {type: String,required:true},
description: {type: String,required:true},
image: {type: String,required:true},
creator: {type: mongoose.Types.ObjectId,required: true, ref:'User'}, //referans yaparak User modelinden bir id alıyoruz

});


export const learningsModule = mongoose.model('Learnings', learnings);
