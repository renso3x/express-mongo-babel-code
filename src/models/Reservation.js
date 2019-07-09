import mongoose from 'mongoose';
import moment from 'moment';

import { roomSchema } from './Room';
import { customerSchema } from './Customer';
import { rateSchema } from './Rate';

export const reservationSchema = new mongoose.Schema({
  customer: customerSchema,
  room: roomSchema,
  rate: rateSchema, // get the rate for todays room
  startDate: {
    type: Date,
    default: moment()
  },
  endDate: {
    type: Date,
    default: moment().add('1', 'd')
  },
});

export default Reservation = mongoose.model('Reservation', reservationSchema);