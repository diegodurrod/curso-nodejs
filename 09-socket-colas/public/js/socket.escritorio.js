/*jshint esversion: 2017 */
var socket = io();

var searchParams = new URLSearchParams(window.location.search);

if(!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
var label = $('small');

console.log(escritorio);

$('h1').text('Escritorio ' + escritorio);
$('button').on('click', () => {
    socket.emit('atenderTicket', { escritorio }, (resp) => {
        if(resp === 'No hay tickets') {
            alert(resp);
            return;
        }
        label.text('Ticket ' + resp.numero)
        console.log(resp);
    });
});