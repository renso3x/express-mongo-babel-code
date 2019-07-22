import express from 'express';
import { validateBed, isValidId } from '../middlewares/';
import { get, getById, save, update, deleteById } from '../controllers/BedController';

const router = express.Router();

router.get('/', get);
router.get('/:id', [isValidId], getById);
router.post('/', [validateBed], save);
router.put('/:id', [isValidId, validateBed], update);
router.delete('/:id', [isValidId], deleteById);

export default router;