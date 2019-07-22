import mongoose from 'mongoose';
import { ERROR_MESSAGE } from '../constants/responses';

export async function isValidId(req, res, next) {
  const isValid = mongoose.Types.ObjectId.isValid(req.params.id);

  if (!isValid) {
    const response = Object.assign({}, ERROR_MESSAGE, {
      message: "Sorry, you're id is malformed."
    });
    return res.send(response);
  }
  next();
}

