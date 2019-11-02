/*jshint esversion: 2017 */
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();

// Como Express.js está basado en http, podemos pasarlo por parámetro a createServer
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = esta es la comunicacion del backend
let io = socketIO(server);

// Cuando el cliente se conecta, lanzamos este mensaje
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

// Ahora para escuchar el puerto, cambiamos app por server
server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);
});