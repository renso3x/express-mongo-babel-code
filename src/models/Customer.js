import mongoose from 'mongoose';
import Joi from 'joi';

export const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String
  },
  idType: {
    type: String,
    required: true
  },
  idNumber: {
    type: String
  },
  accomodation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Accomodation'
  }
});

export function validateCustomer(customer) {
  const schema = {
    firstName: Joi.string()
      .max(50)
      .required(),
    lastName: Joi.string()
      .max(50)
      .required(),
    email: Joi.string().email({ minDomainSegments: 2 }),
    phoneNumber: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    idType: Joi.string().required(),
    idNumber: Joi.string(),
    accomodation: Joi.string.required()
  };

  return Joi.validate(customer, schema);
}

export default mongoose.model('Customer', customerSchema);
