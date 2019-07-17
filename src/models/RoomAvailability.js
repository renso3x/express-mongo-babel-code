import mongoose from 'mongoose';
import Joi from 'joi';

export const roomAvailabilitySchema = new mongoose.Schema({
  room: {
    type: new mongoose.Schema({
      name: String
    })
  },
  date: {
    type: Date,
  },
  quantity: {
    type: Number
  },
  price: {
    type: Number
  }
});

export function validateRoomAvailability(room) {
  const schema = {
    date: Joi.date(),
    quantity: Joi.number(),
    price: Joi.price()
  };

  return Joi.validate(room, schema);
}

export default mongoose.model('RoomAvailability', roomAvailabilitySchema);