import { request } from "express";
import { getConnectionAgentes } from "../dbagentes.js";

export const getListados = (req, res) => {
    const db = getConnectionAgentes();
    res.json(db.data);
};
export const getAgente = (req, res) => {
    const db = getConnectionAgentes();
    res.json(db.data.agente);
};
export const getTecnica = (req, res) => {
    const db = getConnectionAgentes();
    if (db.data && db.data.tecnica) {
        const tecnicas = db.data.tecnica;
        console.log('Técnicas de electroterapia disponibles:');
        tecnicas.forEach((tecnica, index) => {
          console.log(`${index + 1}. ${tecnica}`);
          res.json(db.data.tecnica);
        });
      } else {
        console.log('No se encontraron técnicas en la base de datos.');
      }
    
};
export const getCampos = (req, res) => {
    const db = getConnectionAgentes();
    res.json(db.data.campos);
};
export const getEnergias = (req, res) => {
    const db = getConnectionAgentes();
    res.json(db.data.energias);
};
export const getFrecuencias = (req, res) => {
    const db = getConnectionAgentes();
    res.json(db.data.frecuencias);
};
export const getPatologias = (req, res) => {
    const db = getConnectionAgentes();
    res.json(db.data.patologias);
};
export const getCorrientes = (req, res) => {
    const db = getConnectionAgentes();
    res.json(db.data.corrientes);
};
export const getTendencias = (req, res) => {
    const db = getConnectionAgentes();
    res.json(db.data.tendencias);
};
export const getLegal = (req, res) => {
    const db = getConnectionAgentes();
    res.json(db.data.legal);
};
export const getConsentimientos = (req, res) => {
    const db = getConnectionAgentes();
    res.json(db.data.consetimientos);
};
export const getIndicaciones = (req, res) => {
    const db = getConnectionAgentes();
    res.json(db.data.indicaciones);
};

export const getContraindicaciones = (req, res) => {
    const db = getConnectionAgentes();
    res.json(db.data.contraindicaciones);
};
export const getProtocolos = (req, res) => {
    const db = getConnectionAgentes();
    res.json(db.data.protocolos);
};
export const getEvidencias = (req, res) => {
    const db = getConnectionAgentes();
    res.json(db.data.evidencias);
};
export const getEquipos = (req, res) => {
    const db = getConnectionAgentes();
    res.json(db.data.equipos);
};