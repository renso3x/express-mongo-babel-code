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
  price: {
    type: Number
  }
});

export function validateRoomAvailability(room) {
  const schema = {
    roomId: Joi.string().required(),
    date: Joi.date(),
    price: Joi.number()
  };

  return Joi.validate(room, schema);
}

export default mongoose.model('RoomAvailability', roomAvailabilitySchema);