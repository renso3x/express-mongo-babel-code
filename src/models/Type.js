import mongoose from 'mongoose';

export const typeSchema = new mongoose.Schema({
  name: {
    type: String,
  }
});

export default mongoose.model('Type', typeSchema);