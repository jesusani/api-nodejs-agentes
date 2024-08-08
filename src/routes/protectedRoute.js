// routes/protectedRoute.js

import express from 'express';

const router = express.Router();
import verifyToken from '../middleware/authMiddleware.js';

import users from './users.js';
// Protected route
router.get('/', verifyToken, (req, res) => {
    res.status(200).json({ message: 'Protected route accessed' });
});

router.use('/users', users);
export default router;