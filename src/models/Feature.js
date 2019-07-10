import mongoose from 'mongoose';

export const featureSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 255,
  }
});

export default mongoose.model('Feature', featureSchema);