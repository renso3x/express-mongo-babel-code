import { validateFeature } from '../models/Feature';
import { ERROR_MESSAGE } from '../constants/responses';

export async function isValidFeature(req, res, next) {
  const { error } = validateFeature(req.body);
  if (error) {
    const response = Object.assign({}, ERROR_MESSAGE, {
      message: error.details[0].message
    })
    return res.send(response);
  }

  next();
}

