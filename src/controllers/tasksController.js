import { request } from "express";
import { getConnection } from "../database.js";

export const getTaskById = (req, res) => {
    const task = getConnection().data.tasks.find(task => task.id == req.params.id);
    if (!task) return res.sendStatus(404);
    res.json(task);
};

export const getTasks = (req, res) => {
    const db = getConnection();
    res.json(db.data.tasks);
};

export const countTasks = (req, res) => {
    const count = getConnection().data.tasks.length;
    res.json(count);
};

export const createTask = async (req, res) => {
    try {
        const db = getConnection();
        const newtask = {
            "id": 1,
            "name": req.body.name,
            "descripcion": req.body.description
        }

        db.data.tasks.push(newtask);
        await db.write();

        console.log(req.body);
        res.send((req.body));
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

export const updateTask = async (req, res) => {
    const task = getConnection().data.tasks.find(task => task.id == req.params.id);
    if (!task) return res.sendStatus(404);
    task.name = req.body.name;
    task.descripcion = req.body.description;
    getConnection().data.tasks.map(t => t.id == req.params.id ? task : t);

    await getConnection().write();
    res.status(200).send(task);
};

export const deleteTask = (req, res) => {
    const task = getConnection().data.tasks.find(task => task.id == req.params.id);
    if (!task) return res.sendStatus(404);
    const newdata = getConnection().data.tasks.filter(task => task.id != req.params.id);
    getConnection().data.tasks = newdata;
    res.status(200).send(task);

};

