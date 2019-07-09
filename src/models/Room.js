import mongoose from 'mongoose';

import typeSchema from './Type';
import featureSchema from './Feature';
import imageSchema from './Image';
import bedConfigSchema from './BedConfiguration';

export const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  type: typeSchema,
  maxRooms: {
    type: Number,
    default: 1,
  },
  description: {
    type: String,
    minlength: 50,
    maxlength: 255
  },
  roomSize: {
    type: Number,
  },
  features: [featureSchema],
  images: imageSchema,
  bedConfig: [bedConfigSchema],
});

export default Room = mongoose.model('Room', roomSchema);

