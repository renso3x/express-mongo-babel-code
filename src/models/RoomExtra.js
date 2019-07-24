import mongoose from 'mongoose';
import Joi from 'joi';

export const roomExtraSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100
  },
  price: {
    type: Number
  },
  description: {
    type: String,
    maxlength: 255
  },
});

export function validateExtra(extra) {
  const schema = {
    name: Joi.string().max(100).required(),
    price: Joi.number(),
    description: Joi.string().max(255)
  };
  return Joi.validate(extra, schema);
}


export default mongoose.model('RoomExtra', roomExtraSchema);