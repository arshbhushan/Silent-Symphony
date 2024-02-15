import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
const userSchema = mongoose.Schema({
    name : {type: String,required:true},
    email: {type: String,required:true,unique: true},
    password: {type: String,required:true, minlength:6},
    image: {type: String,required:true},
    learnings: {type: String,required:true},
    
    });
    userSchema.plugin(uniqueValidator);  //This will add a unique index to the email field in MongoDB
                                        //and throw an error if we try to insert a document with duplicate email address server side

    module.exports= mongoose.model("User",userSchema) ;