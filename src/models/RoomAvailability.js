import mongoose from 'mongoose';

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

export default mongoose.model('RoomAvailability', roomAvailabilitySchema);