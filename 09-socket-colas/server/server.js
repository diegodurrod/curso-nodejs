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
module.exports.io = socketIO(server);
require('./sockets/socket');

// Cuando el cliente se conecta, lanzamos este mensaje


// Ahora para escuchar el puerto, cambiamos app por server
server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);
});