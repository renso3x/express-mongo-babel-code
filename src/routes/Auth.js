import express from 'express';

import { isValidAuth } from '../middlewares';
import { authenticate } from '../controllers/AuthController';

const router = express.Router();

router.post('/', [isValidAuth], authenticate);

export default router;