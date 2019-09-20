/*jshint esversion: 2017 */
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let salida = {
        nombre: 'Diego',
        edad: 28,
        url: req.url
    };
    res.send(salida);

    // res.send('Hola Mundo');
});

app.get('/data', (req, res) => {
    res.send('Hola Data');
});

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});