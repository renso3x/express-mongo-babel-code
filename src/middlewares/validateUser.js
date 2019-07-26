import { validateUser } from '../models/User';
import { ERROR_MESSAGE } from '../constants/responses';

export async function isValidUser(req, res, next) {
  const { error } = validateUser(req.body);
  if (error) {
    const response = Object.assign({}, ERROR_MESSAGE, {
      message: error.details[0].message
    })
    return res.send(response);
  }

  next();
}

