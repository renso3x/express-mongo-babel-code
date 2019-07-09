import mongoose from 'mongoose';

import roomSchema from './Room';

export const rateSchema = new mongoose.Schema({
  room: roomSchema,
  minGuest: {
    type: Number,
    default: 2,
  },
  maxGuest: {
    type: Number,
    default: 1,
  },
  rate: {
    type: Number,
  },
  mealsIncluded: {
    type: String,
    enum: ['Breakfast', 'Lunch', 'Dinner', 'All Inclusive'],
  },
  rateName: {
    type: String,
    minlenght: 5,
    maxlenght: 255,
  },
  description: {
    type: String,
    minlenght: 25,
    maxlenght: 255,
  }
});

export default Rate = mongoose.model('Rate', rateSchema);