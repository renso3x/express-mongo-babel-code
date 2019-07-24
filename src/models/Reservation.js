import mongoose from 'mongoose';
import moment from 'moment';
import Joi from 'joi';

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
  checkin: {
    type: Date,
    default: moment().format('YYYY-MM-DD')
  },
  checkout: {
    type: Date,
    default: moment().format('YYYY-MM-DD')
  },
  extras: [{
    type: new mongoose.Schema({
      name: String
    })
  }],
  status: {
    type: String,
  }
});
// static is available not directly specific for an object
reservationSchema.statics.lookupCustomer = function (lastName) {
  return this.findOne({
    'customer.lastName': lastName,
  });
};
// static is available not directly specific for an object
reservationSchema.statics.lookupRoom = function (roomName) {
  return this.findOne({
    'room.name': roomName,
  });
};


export function validateReservation(reservation) {
  const schema = {
    customerId: Joi.string().required(),
    roomId: Joi.string().required(),
    checkin: Joi.date().required(),
    checkout: Joi.date().required(),
    extras: Joi.array(),
    status: Joi.string(),
  };
  return Joi.validate(reservation, schema);
}

export default mongoose.model('Reservation', reservationSchema);