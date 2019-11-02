const { io } = require('../server');

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
    client.on('enviarMensaje', (mensaje, callback) => {
        console.log(mensaje);

        if(mensaje.usuario) {
            callback({
                resp: 'TODO SALIÓ BIEN'
            });
        }
        else {
            callback({
                resp: 'TODO SALIÓ MAL!!!'
            });
        }
    });
});