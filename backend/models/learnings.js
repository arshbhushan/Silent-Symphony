import mongoose from "mongoose";

const learnings = mongoose.Schema({
title : {type: String,reqyired:true},
description: {type: String,reqyired:true},
image: {type: String,reqyired:true},
creator: {type: String,reqyired:true},

});


export const learningsModule = mongoose.model('Learnings', learnings);
