import mongoose, { mongo } from 'mongoose';

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
  type: {
    type: new mongoose.Schema({
      name: String
    })
  },
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
  features: [{
    type: new mongoose.Schema({
      name: String
    })
  }],
  images: {
    type: new mongoose.Schema({
      fileName: {
        type: String,
      },
      url: {
        type: String
      }
    })
  },
  bedConfig: [{
    type: new mongoose.Schema({
      name: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        default: 0,
      }
    })
  }],
});

export default mongoose.model('Room', roomSchema);
