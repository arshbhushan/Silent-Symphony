import mongoose from "mongoose";

const FingerSpelling = mongoose.Schema({
  Alphabet: { type: String, unique: true, required: true }, // Removed "required: true"
  handshape: {
      imageUrl: { type: String, required: true },
      description: { type: String, required: true },
  },
  videoUrl: { type: String, default: '' },
  mnemonicTips: { type: [String], default: [] },
},
{
  timestamps: true,
});


export const FingSpell = mongoose.model('FingerSpelling', FingerSpelling);
