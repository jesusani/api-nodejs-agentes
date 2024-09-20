
import express from 'express';


var router = express.Router();
import { getAgentes, getAgenteById, createAgente, updateAgente, deleteAgente, countAgentes} from '../controllers/agentesController.js';

router.get('/', getAgentes);
router.get('/count', countAgentes);
router.get('/:id', getAgenteById);

router.post('/', createAgente);
router.patch('/:id', updateAgente);
router.delete('/:id', deleteAgente);



export default router