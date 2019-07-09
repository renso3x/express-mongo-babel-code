import mongoose, { mongo } from 'mongoose';

export const roomExtra = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlenght: 5,
    maxlength: 100
  },
  rate: {
    type: Number
  },
  description: {
    type: String,
    minlenght: 5,
    maxlength: 255
  },
});

export default RoomExtra = mongoose.model('RoomExtra', roomExta);