/*jshint esversion: 2017 */

//const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo } = require('./multiplicar/multiplicar'); // utilizando destructuracion de objetos

// Sin la destructuracion de objetos
//console.log(multiplicar);
//multiplicar.crearArchivo

// console.log(process.argv);
let argv = process.argv;
let parametro = argv[2];

let base = parametro.split('=')[1];

console.log(base);

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(e => console.log(e));