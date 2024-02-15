import mongoose from "mongoose";

const learnings = mongoose.Schema({
title : {type: String,required:true},
description: {type: String,required:true},
image: {type: String,required:true},
creator: {type: String,required:true},

});


export const learningsModule = mongoose.model('Learnings', learnings);
