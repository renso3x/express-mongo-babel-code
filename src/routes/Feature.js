import express from 'express';

import { isValidId, isValidFeature } from '../middlewares';
import { get, save, update, getById, deleteById } from '../controllers/FeatureController';

const router = express.Router();

router.get('/', get);
router.get('/:id', getById);
router.post('/', [isValidFeature], save);
router.put('/:id', [isValidId, isValidFeature], update);
router.delete('/:id', [isValidId], deleteById);

export default router;