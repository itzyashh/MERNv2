import express from 'express';
import { login, register, test } from '../controllers/user.js';

const router = express.Router();

router.post('/test',test);
router.post('/register',register);
router.post('/login',login);

export default router;
