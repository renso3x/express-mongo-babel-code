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
    maxlength: 255
  },
  roomSize: {
    type: String,
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
    typeId: Joi.string().required(),
    features: Joi.array(),
    bedConfigId: Joi.string().required(),
    roomSize: Joi.string(),
    description: Joi.string(),
  };

  return Joi.validate(room, schema);
}

export default mongoose.model('Room', roomSchema);
