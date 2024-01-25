import mongoose from "mongoose";

const FingerSpelling = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, // Define _id as ObjectId
  Alphabet: String, // Removed "required: true"
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
