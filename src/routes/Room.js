import express from 'express';

import { isValidId, isValidRoom } from '../middlewares';
import {
  get, save, getById, update
} from '../controllers/RoomController';

const router = express.Router();

router.get('/', get);
router.post('/', [isValidRoom], save);
router.get('/:id', [isValidId], getById);
router.put('/:id', [isValidId, isValidRoom], update);

export default router;