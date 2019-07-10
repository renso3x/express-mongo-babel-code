import mongoose from 'mongoose';
import moment from 'moment';

export const reservationSchema = new mongoose.Schema({
  customer: {
    type: new mongoose.Schema({
      firstName: String,
      lastName: String,
    })
  },
  room: {
    type: new mongoose.Schema({
      name: String
    })
  },
  rate: {
    type: new mongoose.Schema({
      rate: {
        type: Number,
      },
    })
  }, // get the rate for todays room
  startDate: {
    type: Date,
    default: moment()
  },
  endDate: {
    type: Date,
    default: moment().add('1', 'd')
  },
  extras: [{
    type: new mongoose.Schema({
      name: String
    })
  }]
});

export default mongoose.model('Reservation', reservationSchema);