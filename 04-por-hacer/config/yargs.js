// Comandos:
// Crear ... Crear un elemento por hacer
// ... descripcion d
// Actualizar ... Actualiza el estado completado de una tarea
// ... descripcion d
// ... compledado c true

// help

/*jshint esversion: 2017 */
const crearOpts = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
};

const actualizarOpts = {
    descripcion: crearOpts.descripcion,
    completado: {
        alias: 'c',
        default: true
    }
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', crearOpts)
    .command('actualizar', 'Actualiza el estado completado de una tarea', actualizarOpts)
    .help()
    .argv;

module.exports = {
    argv
};