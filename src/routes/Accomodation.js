import express from 'express';

import { auth, isRootUser, isValidAccomodation } from '../middlewares';
import { save, update } from '../controllers/AccomodationController';

const router = express.Router();

router.post('/', [auth, isRootUser, isValidAccomodation], save);
router.put('/', [auth, isRootUser, isValidAccomodation], update);

export default router;
