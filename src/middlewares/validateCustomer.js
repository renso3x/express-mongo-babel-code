import { validateCustomer } from '../models/Customer';
import { ERROR_MESSAGE } from '../constants/responses';

export function isValidCustomer(req, res, next) {
  const { error } = validateCustomer(req.body);
  if (error) {
    const response = Object.assign({}, ERROR_MESSAGE, {
      message: error.message
    })
    return res.send(response);
  }
  next();
}