
import express from 'express';


var router = express.Router();
import { getAgente, getCampos,getConsentimientos, getContraindicaciones, getCorrientes, 
    getEnergias, getEquipos, getEvidencias, getFrecuencias, getIndicaciones, getLegal, 
    getListados, 
    getPatologias, getProtocolos, getTecnica, getTendencias }
    from '../controllers/ListadosController.js';

    router.get('/', getListados);
    router.get('/campos', getCampos);
router.get('/energias', getEnergias);

router.get('/frecuencias', getFrecuencias);
router.get('/corrientes', getCorrientes);
router.get('/indicaciones', getIndicaciones);

router.get('/agente', getAgente);
router.get('/tecnica', getTecnica);
router.get('/patologias', getPatologias);


router.get('/protocolos', getProtocolos);
router.get('/evidencias', getEvidencias);
router.get('/tendencias', getTendencias);
router.get('/legal', getLegal);
router.get('/consentimientos', getConsentimientos);

router.get('/contraindicaciones', getContraindicaciones);
router.get('/equipos', getEquipos);



export default router