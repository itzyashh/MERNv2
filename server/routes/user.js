import express from 'express';
import { login, signup } from '../controllers/user.js';

const router = express.Router();

router.get('/new',signup)
router.get('/login',login)

export default router;