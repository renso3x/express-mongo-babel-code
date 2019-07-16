import mongoose from 'mongoose';
import Joi from 'joi';

export const imageSchema = new mongoose.Schema({
  file: {
    type: String,
  },
  payload: {
    type: String,
  }
});

export function validateImage(image) {
  const schema = {
    file: Joi.string().regex(/(image)([/])(?:png|jpg|jpeg|tiff)/),
    payload: Joi.string()
  };

  return Joi.validate(image, schema);
}

export default mongoose.model('Image', imageSchema);