import mongoose from 'mongoose';

export const bedConfigSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    default: 0,
  }
});

export default mongoose.model('BedConfig', bedConfigSchema);
