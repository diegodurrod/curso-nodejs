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
    .command('listar', 'Lista todos los elementos', {})
    .command('actualizar', 'Actualiza el estado completado de una tarea', actualizarOpts)
    .command('borrar', 'Borra un elemento existente', crearOpts)
    .help()
    .argv;

module.exports = {
    argv
};