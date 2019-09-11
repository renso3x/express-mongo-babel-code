import mongoose from 'mongoose';
import Joi from 'joi';

export const bedConfigSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number
  }
});

export function validateBedConfig(bed) {
  const schema = {
    name: Joi.string()
      .min(3)
      .max(255),
    quantity: Joi.number().positive()
  };

  return Joi.validate(bed, schema);
}

export default mongoose.model('BedConfig', bedConfigSchema);
