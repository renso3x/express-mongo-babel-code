import 'dotenv/config';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import Joi from 'joi';

const schema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 10,
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
  password: {
    type: String,
    minlength: 8,
    maxlength: 255,
    required: true
  },
  accomodation: {
    type: String,
    ref: 'Accomodation'
  },
  isAdmin: Boolean,
  rootUser: Boolean
});

schema.methods.generateAuthToken = function(cb) {
  const token = jwt.sign(
    {
      _id: this._id,
      isAdmin: this.isAdmin,
      accomodation: this.accomodation,
      isRootUser: this.rootUser
    },
    process.env.JWT_SECRET_KEY
  );
  return cb(token);
};

export function validateUser(user) {
  const schema = {
    name: Joi.string()
      .min(10)
      .max(255)
      .required(),
    email: Joi.string()
      .min(10)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(8)
      .max(255)
      .required(),
    accomodation: Joi.string().required()
  };

  return Joi.validate(user, schema);
}

export default mongoose.model('User', schema);
