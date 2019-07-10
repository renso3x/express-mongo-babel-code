import mongoose from 'mongoose';

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


export default mongoose.model('RoomExtra', roomExtraSchema);