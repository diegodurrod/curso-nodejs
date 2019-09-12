/*jshint esversion: 2017 */



//const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); // utilizando destructuracion de objetos
const argv = require('./config/yargs').argv;

const colors = require('colors');

// Sin la destructuracion de objetos
//console.log(multiplicar);
//multiplicar.crearArchivo

// console.log(process.argv);
// let argv2 = process.argv;

// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(argv.limite);
// console.log(argv2);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(`Listando la tabla ${ tabla }`))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, `${ archivo }`.green))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
        break;
};