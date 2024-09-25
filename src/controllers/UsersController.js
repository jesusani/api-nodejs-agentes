import { request } from "express";
import { getConnection } from "../database.js";

export const getUserById = (req, res) => {
    const user = getConnection().data.users.find(user => user.id == req.params.id);
    if (!user) return res.sendStatus(404);
    res.json(user);
};

export const getUsers = (req, res) => {
    const db = getConnection();
    console.log(db.data.users);
    res.json(db.data.users);
};

export const countUsers = (req, res) => {
    const count = getConnection().data.users.length;
    res.json(count);
};

export const createUser = async (req, res) => {
    try {
        const db = getConnection();
        const newUser = {
            "id": 100,
            "name": req.body.name,
            "email": req.body.email,
            "password": req.body.password,
            "rol": req.body.rol
        }

        db.data.users.push(newUser);
        await db.write();

        console.log(req.body);
        res.send((req.body));
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

export const updateUser = async (req, res) => {
    const user = getConnection().data.users.find(user => user.id == req.params.id);
    if (!user) return res.sendStatus(404);
    user.name = req.body.name;
    user.descripcion = req.body.description;
    getConnection().data.users.map(t => t.id == req.params.id ? user : t);

    await getConnection().write();
    res.status(200).send(user);
};

export const deleteUser = (req, res) => {
    const user = getConnection().data.users.find(user => user.id == req.params.id);
    if (!user) return res.sendStatus(404);
    const newdata = getConnection().data.users.filter(user => user.id != req.params.id);
    getConnection().data.users = newdata;
    res.status(200).send(user);

};

