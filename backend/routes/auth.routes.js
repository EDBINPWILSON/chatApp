import express from 'express';
import { login, logout, newuser } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/login', login);
router.post('/logout', logout);
router.post('/newuser', newuser);

export default router;
