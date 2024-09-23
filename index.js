import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import router from './src/routes/index.js';
import {createConnectionAgentes} from './src/dbagentes.js';


const app = express();
app.use(cors());

const port = process.env.PORT || 3000  // establecemos nuestro puerto

createConnectionAgentes();    

// nuestra ruta irá en http://localhost:3080/api1
// es bueno que haya un prefijo, sobre todo por el tema de versiones de la API
app.use(express.json());

app.get('/api', function (req, res) {
  res.status(200).json({ message: 'Estás conectado a nuestra API ¡Qué versión tienes? ' })
});

app.use('/api/v1', router);

app.get('/', function (req, res) {
    res.status(200).json({ message: 'Entrando en terreno peligroso' })
  });



//arrancamos el servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)