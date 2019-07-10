import mongoose, { mongo } from 'mongoose';

export const imageSchema = new mongoose.Schema({
  fileName: {
    type: String,
  },
  url: {
    type: String
  }
});

export default mongoose.model('Image', imageSchema);