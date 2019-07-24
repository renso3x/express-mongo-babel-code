import { validateReservation } from '../models/Reservation';
import { ERROR_MESSAGE } from '../constants/responses';

export function isValidReservation(req, res, next) {
  const { error } = validateReservation(req.body);

  if (error) {
    const response = Object.assign({}, ERROR_MESSAGE, {
      message: error.message
    })
    return res.send(response);
  }

  next();
}