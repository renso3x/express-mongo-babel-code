// check if there is x-auth-token headers
// protect the route
// verify the token
import _ from 'lodash';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import Joi from 'joi';
import {
  FORBIDDEN,
  INVALID_ACCESS,
  INVALID_TOKEN,
  ERROR_MESSAGE
} from '../constants/responses';

export function auth(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.send(INVALID_ACCESS);
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
    // insert the user info in the request
    req.user = decode;
    next();
  } catch (ex) {
    res.send(INVALID_TOKEN);
  }
}

// check if role is admin
export function isAdmin(req, res, next) {
  // this will execute after the auth
  if (!req.user.isAdmin) return res.send(FORBIDDEN);

  next();
}

export function isRootUser(req, res, next) {
  // this will execute after the auth
  if (!req.user.isRootUser) return res.send(FORBIDDEN);

  next();
}

export function isValidAuth(req, res, next) {
  const schema = {
    email: Joi.string()
      .min(10)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(8)
      .max(1024)
      .required()
  };

  const { error } = Joi.validate(req.body, schema);

  if (error) {
    const response = Object.assign({}, ERROR_MESSAGE, {
      message: error.details[0].message
    });
    return res.send(response);
  }

  next();
}
