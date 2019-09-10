/*jshint esversion: 2017 */

//const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo } = require('./multiplicar/multiplicar'); // utilizando destructuracion de objetos

let base = 7;

// Sin la destructuracion de objetos
//console.log(multiplicar);
//multiplicar.crearArchivo

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(e => console.log(e));