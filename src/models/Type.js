import mongoose from 'mongoose';

export const typeSchema = new mongoose.Schema({
  name: {
    type: String,
  }
});

const Type = mongoose.model('Type', typeSchema);

export default Type;