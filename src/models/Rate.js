import mongoose from 'mongoose';
import Joi from 'joi';

export const rateSchema = new mongoose.Schema({
  room: {
    type: new mongoose.Schema({
      name: {
        type: String,
      },
    })
  },
  minGuest: {
    type: Number,
    default: 2,
  },
  maxGuest: {
    type: Number,
    default: 1,
  },
  price: {
    type: Number,
  },
  rateName: {
    type: String,
    maxlength: 50,
    required: true
  },
  description: {
    type: String,
    maxlength: 255,
  }
});

export function validatedRate(rate) {
  const schema = {
    roomId: Joi.string().required(),
    minGuest: Joi.number(),
    maxGuest: Joi.number(),
    price: Joi.number(),
    rateName: Joi.string().max(50).required(),
    description: Joi.string().max(255),
  };

  return Joi.validate(rate, schema);
}

export default mongoose.model('Rate', rateSchema);