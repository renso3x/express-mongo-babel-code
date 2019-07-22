import { validateType } from '../models/Type';
import { ERROR_MESSAGE } from '../constants/responses';

export async function isValidType(req, res, next) {
  const { error } = validateType(req.body);
  if (error) {
    const response = Object.assign({}, ERROR_MESSAGE, {
      message: error.details[0].message
    })
    return res.send(response);
  }

  next();
}

