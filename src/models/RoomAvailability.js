import mongoose from 'mongoose';

import roomSchema from './Room';

export const roomAvailabilitySchema = new mongoose.Schema({
  room: roomSchema,
  date: {
    type: Date,
  },
  quantity: {
    type: Number
  }
});

export default RoomAvailability = mongoose.model('RoomAvailability', roomAvailabilitySchema);