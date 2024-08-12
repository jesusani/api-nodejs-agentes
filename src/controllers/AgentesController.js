import { request } from "express";
import { getConnection } from "../database.js";

export const getAgenteById = (req, res) => {
    const agente = getConnection().data.agentes.find(agente => agente.id == req.params.id);
    if (!agente) return res.sendStatus(404);
    res.json(agente);
};

export const getAgentes = (req, res) => {
    const db = getConnection();
    res.json(db.data.agentes);
};

export const countAgentes = (req, res) => {
    const count = getConnection().data.agentes.length;
    res.json(count);
};

export const createAgente = async (req, res) => {
    try {
        const db = getConnection();
        const newagente = {
            "id": 1,
            "name": req.body.name,
            "descripcion": req.body.description
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
    const agente = getConnection().data.agentes.find(agente => agente.id == req.params.id);
    if (!agente) return res.sendStatus(404);
    agente.name = req.body.name;
    agente.descripcion = req.body.description;
    getConnection().data.agentes.map(t => t.id == req.params.id ? agente : t);

    await getConnection().write();
    res.status(200).send(agente);
};

export const deleteAgente = (req, res) => {
    const agente = getConnection().data.agentes.find(agente => agente.id == req.params.id);
    if (!agente) return res.sendStatus(404);
    const newdata = getConnection().data.agentes.filter(agente => agente.id != req.params.id);
    getConnection().data.agentes = newdata;
    res.status(200).send(agente);

};

