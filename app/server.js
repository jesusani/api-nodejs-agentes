var express = require ('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/', function(req,res){
    express.json({mensaje: 'Hola Mundo'})
});

app.get('/agentes', function(req, res) {
    res.json({ mensaje: '¡A beber agente!' })  
  })
  
  app.post('/', function(req, res) {
    res.json({ mensaje: 'Método post' })   
  })
  
  app.delete('/', function(req, res) {
    res.json({ mensaje: 'Método delete' })  
  })
  
  // iniciamos nuestro servidor
  app.listen(port)
  console.log('API escuchando en el puerto ' + port)

