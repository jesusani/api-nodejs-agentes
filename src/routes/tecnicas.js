
import express from 'express';


var router = express.Router();
import { getTecnicas, getTecnicaById, createTecnica, updateTecnica, deleteTecnica, countTecnicas, getTecnicaByCampo, getTecnicaByCodigo }
    from '../controllers/TecnicasController.js';

router.get('/', getTecnicas);
router.get('/count', countTecnicas);

router.get('/filter', getTecnicaByCodigo);
router.get('/search', getTecnicaByCampo);
router.get('/:id', getTecnicaById);

router.post('/', createTecnica);
router.patch('/:id', updateTecnica);
router.delete('/:id', deleteTecnica);


export default router