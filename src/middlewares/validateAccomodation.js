import { validateAccomodation } from '../models/Accomodation';
import { ERROR_MESSAGE } from '../constants/responses';

export function isValidAccomodation(req, res, next) {
  const { error } = validateAccomodation(req.body);
  if (error) {
    const response = Object.assign({}, ERROR_MESSAGE, {
      message: error.details[0].message
    });
    return res.send(response);
  }

  next();
}
