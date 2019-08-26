import mongoose from 'mongoose';
import Joi from 'joi';

export const accomodationSchema = new mongoose.Schema({
  _id: String,
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    maxlength: 255,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  state: {
    type: String
  },
  postalCode: {
    type: String
  },
  contactPerson: {
    type: String,
    required: true
  },
  businessEmail: {
    type: String,
    required: true
  },
  mainPhoneNumber: {
    type: String,
    required: true
  },
  secondaryPhoneNumber: {
    type: String
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Type',
    required: true
  }
});

export function validateAccomodation(accom) {
  const schema = {
    name: Joi.string()
      .max(255)
      .required(),
    address: Joi.string().max(255),
    country: Joi.string(),
    state: Joi.string(),
    destination: Joi.string(),
    postalCode: Joi.string(),
    contactPerson: Joi.string().required(),
    businessEmail: Joi.string().required(),
    mainPhoneNumber: Joi.string().required(),
    secondaryPhoneNumber: Joi.string(),
    accomodationTypeId: Joi.string().required()
  };

  return Joi.validate(accom, schema);
}

export default mongoose.model('Accomodation', accomodationSchema);
