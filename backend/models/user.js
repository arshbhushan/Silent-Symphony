import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
const userSchema = mongoose.Schema({
    name : {type: String,required:true},
    email: {type: String,required:true,unique: true},
    password: {type: String,required:true, minlength:6},
    image: {type: String,required:false},
    learnings: [{type: mongoose.Types.ObjectId,required: true, ref:'Learnings'}],
    roles: { type: [String], default: ['USER'] }
    });
    userSchema.plugin(uniqueValidator);

export const userModule = mongoose.model("User",userSchema) ;