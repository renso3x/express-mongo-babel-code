import mongoose from 'mongoose';
import Joi from 'joi';

export const featureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

export function validateFeature(feature) {
  const schema = {
    name: Joi.string().required()
  };

  return Joi.validate(feature, schema);
}

export default mongoose.model('Feature', featureSchema);
