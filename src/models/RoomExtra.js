import mongoose from 'mongoose';
import Joi from 'joi';

export const roomExtraSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlenght: 5,
    maxlength: 100
  },
  price: {
    type: Number
  },
  description: {
    type: String,
    minlenght: 5,
    maxlength: 255
  },
});

export function validateExtra(extra) {
  const schema = {
    name: Joi.string().min(5).max(100),
    price: Joi.number(),
    description: Joi.string().min(5).max(255)
  };
  return Joi.validate(extra, schema);
}


export default mongoose.model('RoomExtra', roomExtraSchema);