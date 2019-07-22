import express from 'express';
import { isValidCustomer, isValidId } from '../middlewares';
import { get, save, getById, update, deleteById } from '../controllers/CustomerController';

const router = express.Router();

router.get('/', get);
router.get('/:id', [isValidId], getById);
router.post('/', [isValidCustomer], save);
router.put('/:id', [isValidId, isValidCustomer], update);
router.delete('/:id', [isValidId], deleteById);

export default router;