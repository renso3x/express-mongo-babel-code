import express from 'express';

import { isValidRoomAvailability, isValidId } from '../middlewares';
import {
  get, save, getById,
  update, deleteById
} from '../controllers/RoomAvailabilityController';

const router = express.Router();

router.get('/', get);
router.post('/', [isValidRoomAvailability], save);
router.get('/:id', [isValidId], getById);
router.put('/:id', [isValidId, isValidRoomAvailability], update);
router.delete('/:id', [isValidId], deleteById);

export default router;