import express from 'express';

import { isValidId, isValidRoom, auth } from '../middlewares';
import {
  get, save, getById, update
} from '../controllers/RoomController';

const router = express.Router();

router.get('/', [auth], get);
router.post('/', [auth, isValidRoom], save);
router.get('/:id', [auth, isValidId], getById);
router.put('/:id', [auth, isValidId, isValidRoom], update);

export default router;