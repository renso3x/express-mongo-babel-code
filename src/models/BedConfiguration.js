import mongoose from 'mongoose';
import Joi from 'joi';

export const bedConfigSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    default: 1,
  }
});

export function validateBedConfig(bed) {
  const schema = {
    name: Joi.string().min(3).max(255).required(),
    quantity: Joi.number().min(1).positive()
  };

  return Joi.validate(bed, schema);
}

export default mongoose.model('BedConfig', bedConfigSchema);
