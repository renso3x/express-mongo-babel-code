import mongoose from 'mongoose';
import Joi from 'joi';

export const accomodationSchema = new mongoose.Schema({
  _id: String,
  name: {
    type: String,
    maxlength: 255,
    required: true
  },
  email: {
    type: String,
    minlength: 10,
    maxlength: 255,
    unique: true,
    required: true
  },
  address: {
    type: String,
    maxlength: 255
  },
  city: {
    type: String
  },
  province: {
    type: String
  },
  contactNumber: {
    type: String
  }
});

export function validateAccomodation(accom) {
  const schema = {
    name: Joi.string()
      .max(255)
      .required(),
    address: Joi.string().max(255),
    city: Joi.string(),
    province: Joi.string(),
    contactNumber: Joi.string(),
    email: Joi.string()
      .min(10)
      .max(255)
      .required()
      .email()
  };

  return Joi.validate(accom, schema);
}

export default mongoose.model('Accomodation', accomodationSchema);
