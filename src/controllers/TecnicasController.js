import { request } from "express";
import { getConnectionTecnicas } from "../dbagentes.js";

export const getTecnicaById = (req, res) => {
  const tecnica = getConnectionTecnicas().data.tecnicas.find(
    (tecnica) => tecnica.id == req.params.id
  );
  if (!tecnica) return res.sendStatus(404);
  res.json(tecnica);
};

export const getTecnicaByCampo = (req, res) => {
  const { q } = req.query; // Captura el parámetro 'q' de la query string
  const tecnicas = getConnectionTecnicas().data.tecnicas;

  if (!tecnicas) return res.sendStatus(404);
  if (!q) {
    res.json(tecnicas);
  } else {
    const filteredTecnicas = tecnicas.filter(
      (tecnica) =>
        tecnica.energia.toLowerCase().includes(q.toLowerCase()) ||
        tecnica.campo.toLowerCase().includes(q.toLowerCase()) ||
        tecnica.corriente.toLowerCase().includes(q.toLowerCase()) ||
        tecnica.tecnica.toLowerCase().includes(q.toLowerCase()) ||
        tecnica.tecnica.toLowerCase().includes(q.toLowerCase()) ||
        tecnica.frecuencia.toLowerCase().includes(q.toLowerCase()) ||
        tecnica.patologia.toLowerCase().includes(q.toLowerCase()) ||
        tecnica.indicaciones.toLowerCase().includes(q.toLowerCase()) ||
        tecnica.contraindicaciones.toLowerCase().includes(q.toLowerCase()) ||
        tecnica.equipos.toLowerCase().includes(q.toLowerCase()) ||
        tecnica.tendencia.toLowerCase().includes(q.toLowerCase()) ||
        tecnica.legal.toLowerCase().includes(q.toLowerCase())
    );
  }

  if (!filteredTecnicas) return res.sendStatus(404);
  res.json(filteredTecnicas);
};

export const getTecnicaByCodigo = (req, res) => {
  const { codigo } = req.query; // Captura el parámetro 'q' de la query string
  const tecnicas = getConnectionTecnicas().data.tecnicas;
  if (!codigo)
    return res
      .status(404)
      .send({
        error:
          "Debe proporcionar una palabra de búsqueda en el parámetro `código`",
      });
  if (!tecnicas) return res.sendStatus(404);
  const codigoNumber = parseInt(codigo);

  const filteredTecnicas = tecnicas.filter(
    (tecnica) =>
      tecnica.codigo === codigoNumber || String(tecnica.codigo).includes(codigo)
  );

  if (!filteredTecnicas) return res.sendStatus(404);
  res.json(filteredTecnicas);
};

export const getTecnicas = (req, res) => {
  const db = getConnectionTecnicas();
  res.json(db.data.tecnicas);
};

export const countTecnicas = (req, res) => {
  const count = getConnectionTecnicas().data.tecnicas.length;
  const cuenta = { count };
  res.json(cuenta);
};

export const createTecnica = async (req, res) => {
  try {
    const count = getConnectionTecnicas().data.tecnicas.length;

    const db = getConnectionTecnicas();
    const newtecnica = {
      id: count + 1,
      codigo: req.body.codigo,
      campo: req.body.campo,
      energia: req.body.energia,
      frecuencia: req.body.frecuencia,
      corriente: req.body.corriente,
      tecnica: req.body.tecnica,
      tecnica: req.body.tecnica,
      tendencia: req.body.tendencia,
      patologias: req.body.patologias,
      protocolos: req.body.protocolos,
      evidencia: req.body.evidencia,
      legal: req.body.legal,
      consentimiento: req.body.consentimiento,
      indicaciones: req.body.indicaciones,
      contraindicaciones: req.body.contraindicaciones,
      equipos: req.body.equipos,
    };

    db.data.tecnicas.push(newtecnica);
    await db.write();

    console.log(req.body);
    res.send(req.body);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const updateTecnica = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  let tecnica = getConnectionTecnicas().data.tecnicas.find(
    (tecnica) => tecnica.id == req.params.id
  );
  if (!tecnica) return res.sendStatus(404);

  Object.keys(updates).forEach((key) => {
    tecnica[key] = updates[key]; // Sobrescribir los campos existentes
  });

  getConnectionTecnicas().data.tecnicas.map((t) =>
    t.id == req.params.id ? tecnica : t
  );

  await getConnectionTecnicas().write();
  res.status(200).send(tecnica);
};

export const deleteTecnica = (req, res) => {
  const tecnica = getConnectionTecnicas().data.tecnicas.find(
    (tecnica) => tecnica.id == req.params.id
  );
  if (!tecnica) return res.sendStatus(404);
  const newdata = getConnectionTecnicas().data.tecnicas.filter(
    (tecnica) => tecnica.id != req.params.id
  );
  getConnectionTecnicas().data.tecnicas = newdata;
  res.status(200).send(tecnica);
};
