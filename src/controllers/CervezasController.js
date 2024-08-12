import { request } from "express";
import { getConnection } from "../database.js";

export const getCervezaById = (req, res) => {
    const cerveza = getConnection().data.cervezas.find(cerveza => cerveza.id == req.params.id);
    if (!cerveza) return res.sendStatus(404);
    res.json(cerveza);
};

export const getCervezas = (req, res) => {
    const db = getConnection();
    res.json(db.data.cervezas);
};

export const countCervezas = (req, res) => {
    const count = getConnection().data.cervezas.length;
    res.json(count);
};

export const createCerveza = async (req, res) => {
    try {
        const db = getConnection();
        const newcerveza = {
            "id": 1,
            "name": req.body.name,
            "descripcion": req.body.description
        }

        db.data.cervezas.push(newcerveza);
        await db.write();

        console.log(req.body);
        res.send((req.body));
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

export const updateCerveza = async (req, res) => {
    const cerveza = getConnection().data.cervezas.find(cerveza => cerveza.id == req.params.id);
    if (!cerveza) return res.sendStatus(404);
    cerveza.name = req.body.name;
    cerveza.descripcion = req.body.description;
    getConnection().data.cervezas.map(t => t.id == req.params.id ? cerveza : t);

    await getConnection().write();
    res.status(200).send(cerveza);
};

export const deleteCerveza = (req, res) => {
    const cerveza = getConnection().data.cervezas.find(cerveza => cerveza.id == req.params.id);
    if (!cerveza) return res.sendStatus(404);
    const newdata = getConnection().data.cervezas.filter(cerveza => cerveza.id != req.params.id);
    getConnection().data.cervezas = newdata;
    res.status(200).send(cerveza);

};

