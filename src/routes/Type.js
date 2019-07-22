import express from 'express';

import { isValidId, isValidType } from '../middlewares';
import { get, save, update, getById, deleteById } from '../controllers/TypeController';

const router = express.Router();

router.get('/', get);
router.get('/:id', getById);
router.post('/', [isValidType], save);
router.put('/:id', [isValidId, isValidType], update);
router.delete('/:id', [isValidId], deleteById);

export default router;