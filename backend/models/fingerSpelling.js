import mongoose from "mongoose";

const FingerSpelling = mongoose.Schema({
  Alphabet: { type: String, unique: true, required: true }, // Removed "required: true"
  handshape: {
      imageUrl: { type: String, required: true },
      description: { type: String, required: true },
  },
  videoUrl: { type: String, default: '' },
  mnemonicTips: { type: [String], default: [] },
  creator: {type:String,required: true},
},
{
  timestamps: true,
});


export const FingSpell = mongoose.model('FingerSpelling', FingerSpelling);



//will be used later. 

// const createdLearning = new learningsModule({
//   Alphabet,
//   handShape:{
//     imageUrl: handShape.imageUrl,
//     description: handShape.description
//   },
//   videoUrl,
//   mnemonicTip,
//   creator
// });


  
// updateLearning.Alphabet = Alphabet;
// updateLearning.handShape = {
//   imageUrl: handShape.imageUrl,
//   description: handShape.description // Add other properties as needed
// };
// updateLearning.videoUrl = videoUrl;
// updateLearning.mnemonicTip = mnemonicTip;// Fix property name here
