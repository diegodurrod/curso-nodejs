var socket = io();

// Cuando se conecte, lanzamos un mensaje de consola
socket.on('connect', () => {
    console.log('Conectado al servidor');
});

// Los on son para recibir
// Código que se ejecuta cuando se pierde la conexión con el servidor
socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
});

// Los emits son para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Diego',
    mensaje: 'Hola Mundo'
}, (resp) => {
    console.log('respuesta server: ', resp);
});

// Escucha la información que le llega
socket.on('enviarMensaje', (mensaje) => {
    console.log('Servidor: ', mensaje);
});