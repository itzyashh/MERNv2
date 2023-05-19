import express from 'express';
import { login, register, test } from '../controllers/user.js';

const router = express.Router();

router.post('/test',test);
router.get('/register',register);
router.get('/login',login);

export default router;
