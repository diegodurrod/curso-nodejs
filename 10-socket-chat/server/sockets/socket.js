/*jshint esversion: 2017 */
const { io } = require('../server');
const { Usuarios } = require('../classes/usuarios');

const usuarios = new Usuarios();

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.on('entrarChat', (data, callback) => {
        if (!data.nombre) {
            return callback({
                error: true,
                mensaje: 'El nombre es obligatorio'
            });
        }

        let personas = usuarios.agregarPersona(client.id, data.nombre);
        callback(personas);
    });
});