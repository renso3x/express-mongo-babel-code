import express from 'express';
import { isValidCustomer } from '../middlewares';
import { get, save, getById, update, deleteById } from '../controllers/CustomerController';

const router = express.Router();

router.get('/', get);
router.post('/', [isValidCustomer], save);

export default router;