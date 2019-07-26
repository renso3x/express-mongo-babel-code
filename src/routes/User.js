import express from 'express';

import { isValidUser, isAdmin, auth } from '../middlewares';
import { get, save, me } from '../controllers/UserController';

const router = express.Router();

router.get('/', [auth, isAdmin], get);
router.get('/me', [auth], me);
router.post('/', [isValidUser], save);

export default router;