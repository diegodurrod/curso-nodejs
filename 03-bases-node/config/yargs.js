/*jshint esversion: 2017 */

const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crear el archivo de la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
};