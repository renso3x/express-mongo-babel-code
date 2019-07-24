import { validateExtra } from '../models/RoomExtra';
import { ERROR_MESSAGE } from '../constants/responses';

export function isValidRoomExtra(req, res, next) {
  const { error } = validateExtra(req.body);

  if (error) {
    const response = Object.assign({}, ERROR_MESSAGE, {
      message: error.message
    })
    return res.send(response);
  }

  next();
}