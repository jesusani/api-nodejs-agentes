
import express from 'express';


var router = express.Router();
import { getAgentes, getAgenteById, createAgente, updateAgente, deleteAgente, countAgentes, getAgenteByCampo, getAgenteByCodigo }
    from '../controllers/AgentesController.js';

router.get('/', getAgentes);
router.get('/count', countAgentes);

router.get('/filter', getAgenteByCodigo);
router.get('/search', getAgenteByCampo);
router.get('/:id', getAgenteById);

router.post('/', createAgente);
router.patch('/:id', updateAgente);
router.delete('/:id', deleteAgente);


export default router