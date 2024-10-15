
import express from 'express';

var router = express.Router();

import agentes from './agentes.js';
import tecnicas from './tecnicas.js';


router.get('/', function (req, res) {
  res.status(200).json({ message: 'Estás conectado a nuestra API v1' })
});

router.use('/agentes', agentes);

router.use('/tecnicas', tecnicas);

export default router;