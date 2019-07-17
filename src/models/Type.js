import mongoose from 'mongoose';
import Joi from 'joi';

export const typeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

export function validateType(type) {
  const schema = {
    name: Joi.string().required()
  };

  return Joi.validate(type, schema);
}

export default mongoose.model('Type', typeSchema);