
import { validateBedConfig } from '../models/BedConfiguration';
import { ERROR_MESSAGE } from '../constants/responses';

export function validateBed(req, res, next) {
  const { error } = validateBedConfig(req.body);
  if (error) {
    const response = Object.assign({}, ERROR_MESSAGE, {
      message: error.details[0].message
    })
    return res.send(response);
  }

  next();
}
