
import 'dotenv/config';
import cors from 'cors';
import express from 'express';

var router = express.Router();

import cervezas from './cervezas.js';
import agentes from './agentes.js';
import tasks from './tasks.js';
import authRoutes from '../auth/authJson.js';

import protectedRoute from './protectedRoute.js';

router.get('/', function (req, res) {
  res.status(200).json({ message: 'Estás conectado a nuestra API v1' })
});


router.use('/auth', authRoutes);
router.use('/protected', protectedRoute);

router.use('/cervezas', cervezas);
router.use('/agentes', agentes);
router.use('/tasks', tasks);


export default router;