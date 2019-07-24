import express from 'express';

import { isValidRoomExtra, isValidId } from '../middlewares';
import {
  get, save, getById,
  update, deleteById
} from '../controllers/RoomExtraController';

const router = express.Router();

router.get('/', get);
router.post('/', [isValidRoomExtra], save);
router.get('/:id', [isValidId], getById);
router.put('/:id', [isValidId, isValidRoomExtra], update);
router.delete('/:id', [isValidId], deleteById);

export default router;