//Importamos el modulo fs (viene preinstalado)
import fs from 'fs';
/* 
//Creamos un objeto
let objeto = {
  texto : "Un texto de prueba",
  numero : 3.1416,
  lista : [1, 2, 3],
  otroObjeto : {clave : "valor"},
  listaObjetos : [
    {clave : "valor"},
    {clave : "valor"},
    {inception : {
      inception : "valor"
      },
    },  
  ]
}; */

//Guardamos el objeto en un archivo de texto
//fs.writeFileSync("../../src/test.json", JSON.stringify(objeto));

//Leemos el archivo que acabamos de crear
let Datos = fs.readFileSync("../../src/test.json");
Datos = JSON.parse(Datos);
console.log(Datos);