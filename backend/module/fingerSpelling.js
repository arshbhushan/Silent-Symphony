import mongoose from "mongoose";

 const FingerSpelling=mongoose.Schema( {
    Alphabet: { type: String, required: true },
    handshape: {
      imageUrl: { type: String, required: true },
      description: { type: String, required: true },
    },
    videoUrl: { type: String, default: '' },
    //easy way to learn it or try to implement it is known as mnemonicTip
    mnemonicTips: { type: [String], default: [] },
   
  },
{
    timestamps:true,
});
export const FingSpell=mongoose.model('FingerSpelling',FingerSpelling);