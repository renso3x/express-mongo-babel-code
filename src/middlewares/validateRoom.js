import { validateRoom } from '../models/Room';
import { ERROR_MESSAGE } from '../constants/responses';

export function isValidRoom(req, res, next) {
  const { error } = validateRoom(req.body);
  if (error) {
    const response = Object.assign({}, ERROR_MESSAGE, {
      message: error.message
    })
    return res.send(response);
  }
  next();
}