/*jshint esversion: 2017 */

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

//const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo } = require('./multiplicar/multiplicar'); // utilizando destructuracion de objetos

// Sin la destructuracion de objetos
//console.log(multiplicar);
//multiplicar.crearArchivo

// console.log(process.argv);
let argv2 = process.argv;

// let parametro = argv[2];
// let base = parametro.split('=')[1];

console.log(argv.limite);
// console.log(argv2);

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch(e => console.log(e));