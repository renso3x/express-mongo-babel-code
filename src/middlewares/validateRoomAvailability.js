import { validateRoomAvailability } from '../models/RoomAvailability';
import { ERROR_MESSAGE } from '../constants/responses';

export function isValidRoomAvailability(req, res, next) {
  const { error } = validateRoomAvailability(req.body);

  if (error) {
    const response = Object.assign({}, ERROR_MESSAGE, {
      message: error.message
    })
    return res.send(response);
  }

  next();
}