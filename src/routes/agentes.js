import 'dotenv/config';
import cors from 'cors';
import express from 'express';

var router = express.Router();

router.get('/search', function(req, res) {
  res.json({ message: 'Vas a buscar una cerveza' })
})
router.get('/', function(req, res) {
  res.json({ message: 'Estás conectado a la API. Recurso: agentes' })
})
router.get('/:id', function(req, res) {
  res.json({ message: 'Vas a obtener el agente con id ' + req.params.id })
})
router.post('/', function(req, res) {
  res.json({ message: 'Vas a añadir un agente' })
})
router.put('/:id', function(req, res) {
  res.json({ message: 'Vas a actualizar el agente con id ' + req.params.id })
})
router.delete('/:id', function(req, res) {
  res.json({ message: 'Vas a borrar el agente con id ' + req.params.id})
})

export default router