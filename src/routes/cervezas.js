
import express from 'express';

var router = express.Router();
import { getCervezas, getCervezaById, createCerveza, updateCerveza, deleteCerveza, countCervezas } from '../controllers/CervezasController.js';

router.get('/', getCervezas);
router.get('/count', countCervezas);
router.get('/:id', getCervezaById);

router.post('/', createCerveza);
router.put('/:id', updateCerveza);
router.delete('/:id', deleteCerveza);


export default router