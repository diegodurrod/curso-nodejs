/*jshint esversion: 2017 */
const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');

const ticketControl = new TicketControl();

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escucha al cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        /*
                if(data.usuario) {
                    callback({
                        resp: 'TODO SALIÓ BIEN'
                    });
                }
                else {
                    callback({
                        resp: 'TODO SALIÓ MAL!!!'
                    });
                }
                */
    });

    client.on('siguienteTicket', (data, callback) => {
        let siguiente = ticketControl.siguiente();

        console.log(siguiente);
        callback(siguiente);

    });

    client.emit('estadoActual', {
        actual: ticketControl.ultimo
    });
});