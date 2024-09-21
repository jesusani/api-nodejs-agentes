import { request } from "express";
import { getConnectionAgentes } from "../dbagentes.js";

export const getAgenteById = (req, res) => {
    const agente = getConnectionAgentes().data.agentes.find(agente => agente.id == req.params.id);
    if (!agente) return res.sendStatus(404);
    res.json(agente);
};
export const getAgenteByCampo = (req, res) => {
    const { q } = req.query;  // Captura el parámetro 'q' de la query string
    const agentes = getConnectionAgentes().data.agentes;
    if (!q) return res.status(404).send({ error: 'Debe proporcionar una palabra de búsqueda en el parámetro `q`' });
    if (!agentes) return res.sendStatus(404);  
 
    const filteredAgentes = agentes.filter(agente => 
      
       agente.energia.toLowerCase().includes(q.toLowerCase())  || 
        agente.campo.toLowerCase().includes(q.toLowerCase()) || 
        agente.corriente.toLowerCase().includes(q.toLowerCase()) || 
        agente.agente.toLowerCase().includes(q.toLowerCase())|| 
        agente.tecnica.toLowerCase().includes(q.toLowerCase())|| 
        agente.frecuencia.toLowerCase().includes(q.toLowerCase())
      );

    if (!filteredAgentes) return res.sendStatus(404);  
    res.json(filteredAgentes);
};

export const getAgenteByCodigo = (req, res) => {
    const { codigo } = req.query;  // Captura el parámetro 'q' de la query string
    const agentes = getConnectionAgentes().data.agentes;
    if (!codigo) return res.status(404).send({ error: 'Debe proporcionar una palabra de búsqueda en el parámetro `q`' });
    if (!agentes) return res.sendStatus(404);  
    const codigoNumber = parseInt(codigo);

    const filteredAgentes = agentes.filter(agente => 
        agente.codigo === codigoNumber || 
        String(agente.codigo).includes(codigo)
      );

    if (!filteredAgentes) return res.sendStatus(404);  
    res.json(filteredAgentes);
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
    const { id } = req.params;
    const updates = req.body; 
    let agente = getConnectionAgentes().data.agentes.find(agente => agente.id == req.params.id);
    if (!agente) return res.sendStatus(404);

    Object.keys(updates).forEach(key => {
        agente[key] = updates[key];  // Sobrescribir los campos existentes
      });
 
   

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

