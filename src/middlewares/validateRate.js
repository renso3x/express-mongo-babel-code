import { validatedRate } from '../models/Rate';
import { ERROR_MESSAGE } from '../constants/responses';

export function isValidRate(req, res, next) {
  const { error } = validatedRate(req.body);

  if (error) {
    const response = Object.assign({}, ERROR_MESSAGE, {
      message: error.message
    })
    return res.send(response);
  }

  next();
}