import express from 'express';
import { getMe, login, register } from '../controllers/auth-controller.js';
import { authenticateToken } from '../middlewares/authentication.js';

const authRouter = express.Router();

// POST /api/auth/register
authRouter.post('/register', register);

// POST /api/auth/login
authRouter.post('/login', login);

// GET /api/auth/me
authRouter.get('/me', authenticateToken, getMe);

export default authRouter;
