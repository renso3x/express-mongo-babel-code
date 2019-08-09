import mongoose from 'mongoose';
import Joi from 'joi';

export const packageRateSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
    required: true
  },
  room: {
    type: new mongoose.Schema({
      name: {
        type: String,
        required: true
      }
    })
  },
  date_in: {
    type: Date
  },
  date_out: {
    type: Date
  },
  description: {
    type: String,
    maxlength: 255
  },
  accomodation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Accomodation'
  }
});

export function validatePackageRate(packageRate) {
  const schema = {
    name: Joi.string()
      .max(50)
      .required(),
    roomId: Joi.string().required(),
    date_in: Joi.date(),
    date_out: Joi.date(),
    description: Joi.string().max(255),
    accomodation: Joi.string().required()
  };

  return Joi.validate(packageRate, schema);
}

export default mongoose.model('PackageRate', packageRateSchema);
