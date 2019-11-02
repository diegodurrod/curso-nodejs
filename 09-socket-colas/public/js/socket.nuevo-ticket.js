// Comando para establecer la conexion
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', () => {
    console.log('Conectado al servidor');
});

socket.on('estadoActual', (data) => {
    label.text('Ticket ' + data.actual);
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
});

$('button').on('click', () => {
    socket.emit('siguienteTicket', null, (siguienteTicket) => {
        label.text(siguienteTicket);
        console.log(siguienteTicket);
    });
});