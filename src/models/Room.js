import mongoose from 'mongoose';
import Joi from 'joi';

export const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50
  },
  type: {
    type: new mongoose.Schema({
      name: String
    })
  },
  maxRoom: {
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
  images: [{
    type: new mongoose.Schema({
      name: {
        type: String,
      },
      payload: {
        type: String
      }
    })
  }],
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

export function validateRoom(room) {
  const schema = {
    name: Joi.string().max(50).required(),
    maxRooms: Joi.number().default(1),
    description: Joi.string().min(50).max(255),
    roomSize: Joi.number(),
  };

  return Joi.validate(room, schema);
}

export default mongoose.model('Room', roomSchema);
