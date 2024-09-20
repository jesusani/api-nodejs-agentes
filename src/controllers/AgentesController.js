import { request } from "express";
import { getConnectionAgentes } from "../dbagentes.js";

export const getAgenteById = (req, res) => {
    const agente = getConnectionAgentes().data.agentes.find(agente => agente.id == req.params.id);
    if (!agente) return res.sendStatus(404);
    res.json(agente);
};

export const getAgentes = (req, res) => {
    const db = getConnectionAgentes();
    res.json(db.data.agentes);
};

export const countAgentes = (req, res) => {
    const count = getConnectionAgentes().data.agentes.length;
    res.json(count);
};

export const createAgente = async (req, res) => {
    try {
        const db = getConnectionAgentes();
        const newagente = {
            "id": req.body.id,
            "codigo": req.body.codigo,
            "campo": req.body.campo,
            "energia": req.body.energia,
            "frecuencia": req.body.frecuencia,
            "corriente": req.body.corriente,
            "tecnica": req.body.tecnica,
            "agente": req.body.agente
        }

        db.data.agentes.push(newagente);
        await db.write();

        console.log(req.body);
        res.send((req.body));
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

export const updateAgente = async (req, res) => {
    const agente = getConnectionAgentes().data.agentes.find(agente => agente.id == req.params.id);
    if (!agente) return res.sendStatus(404);
    agente.name = req.body.name;
    agente.descripcion = req.body.description;
    getConnectionAgentes().data.agentes.map(t => t.id == req.params.id ? agente : t);

    await getConnectionAgentes().write();
    res.status(200).send(agente);
};

export const deleteAgente = (req, res) => {
    const agente = getConnectionAgentes().data.agentes.find(agente => agente.id == req.params.id);
    if (!agente) return res.sendStatus(404);
    const newdata = getConnectionAgentes().data.agentes.filter(agente => agente.id != req.params.id);
    getConnectionAgentes().data.agentes = newdata;
    res.status(200).send(agente);

};

