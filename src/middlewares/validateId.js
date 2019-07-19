import mongoose from 'mongoose';
import BedController from '../models/BedConfiguration';
import { ERROR_MESSAGE } from '../constants/responses';

// Validate object ID
export async function isValidId(req, res, next) {
  const isValid = mongoose.Types.ObjectId.isValid(req.params.id);

  if (!isValid) {
    return res.status(400).send("Sorry, you're id is malformed.");
  }

  try {
    const bed = await BedController.findById(req.params.id);
    req.bed = bed;
    next();
  } catch (e) {
    return res.send(ERROR_MESSAGE);
  }
}
