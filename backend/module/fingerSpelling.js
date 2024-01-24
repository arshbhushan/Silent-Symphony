import mongoose from "mongoose";

 const FingerSpelling=mongoose.Schema({

title:{
    type:String,
    require:true,
},
author:{
    type:String,
    required:true,
},
publishYear:{
    type:Number,
    required:true,
},

 },
{
    timestamps:true,
});
export const FingSpell=mongoose.model('FingerSpelling',FingerSpelling);
