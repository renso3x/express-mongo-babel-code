import { validatePackageRate } from '../models/PackageRate';
import { ERROR_MESSAGE } from '../constants/responses';

export function isValidPackageRate(req, res, next) {
  const { error } = validatePackageRate(req.body);

  if (error) {
    const response = Object.assign({}, ERROR_MESSAGE, {
      message: error.message
    })
    return res.send(response)
  }

  next();
}