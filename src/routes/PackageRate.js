import express from 'express';

import { isValidPackageRate, isValidId } from '../middlewares';
import { get, save, getById, update, deleteById } from '../controllers/PackageRateController';

const router = express.Router();

router.get('/', get);
router.post('/', [isValidPackageRate], save);
router.get('/:id', [isValidId], getById);
router.put('/:id', [isValidId, isValidPackageRate], update);
router.delete('/:id', [isValidId], deleteById);

export default router;