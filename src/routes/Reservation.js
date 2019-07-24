import express from 'express';

import { isValidReservation, isValidId } from '../middlewares';
import {
  get, save, getById,
  update, deleteById,
  findCustomer, findRoom
} from '../controllers/ReservationController';

const router = express.Router();

router.get('/', get);
router.post('/', [isValidReservation], save);
router.get('/:id', [isValidId], getById);
router.post('/customer', findCustomer);
router.post('/room', findRoom);
router.put('/:id', [isValidId, isValidReservation], update);
router.delete('/:id', [isValidId], deleteById);

export default router;