import mongoose from 'mongoose';
import Joi from 'joi';

export const featureSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 30,
    required: true,
  }
});

export function validateFeature(feature) {
  const schema = {
    name: Joi.string().min(3).max(100).required()
  };

  return Joi.validate(feature, schema);
}

export default mongoose.model('Feature', featureSchema);