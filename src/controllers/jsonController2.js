//Importamos el modulo fs (viene preinstalado)
import fs from 'fs';

const Archivo = "../../src/db.json";

let LeerDatos = function () {
  let rawdata = fs.readFileSync(Archivo);
  let Datos = JSON.parse(rawdata);
  
  return Datos;
};



let Fecha = new Date();
Fecha = Fecha.getTime() + (-Fecha.getTimezoneOffset() * 60 * 1000);
Fecha = new Date(Fecha);
Fecha = Fecha.toISOString().substring(0, 19).replace("T", " ");

let objeto = {
  fecha : Fecha,
  mensaje : "Un mensaje que genera la aplicación, ya sea de error o de que todo ha ido bien.",
  error : true / false
};

const db =() => {
//Comprobamos si existe el archivo
if (fs.existsSync(Archivo) === false) {
  //Si no existe lo creamos
  fs.writeFileSync(Archivo, 
               '[ "' + objeto + '" ]');
  console.log("Primera ejecución:");
  console.log(LeerDatos());
} else {
  //Si existe lo leemos y añadimos la fecha actual
  let Datos = LeerDatos();
  Datos.unshift(objeto);
  fs.writeFileSync(Archivo, 
                 JSON.stringify(Datos));
  console.log("El programa se ha ejecutado " + Datos.length + " veces");
  console.log(Datos);
};
};

export default db;