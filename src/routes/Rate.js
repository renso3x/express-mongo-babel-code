import express from 'express';

import { isValidRate, isValidId } from '../middlewares';
import { get, save, getById, update, deleteById } from '../controllers/RateController';

const router = express.Router();

router.get('/', get);
router.post('/', [isValidRate], save);
router.get('/:id', [isValidId], getById);
router.put('/:id', [isValidId, isValidRate], update);
router.delete('/:id', [isValidId], deleteById);

export default router;