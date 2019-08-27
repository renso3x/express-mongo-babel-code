import express from 'express';

import { auth, isRootUser, isValidAccomodation } from '../middlewares';
import { get, save, update } from '../controllers/AccomodationController';

const router = express.Router();

router.get('/', [auth, isRootUser], get);
router.post('/', [auth, isRootUser, isValidAccomodation], save);
router.put('/:id', [auth, isRootUser, isValidAccomodation], update);

export default router;
