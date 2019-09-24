/*jshint esversion: 2017 */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.json('Hello World');
});

app.get('/usuarios', function(req, res) {
    res.json('Get Usuarios');
});

app.post('/usuarios', function(req, res) {
    let body = req.body;
    res.json({
        persona: body
    });
});

app.put('/usuarios/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/usuarios', function(req, res) {
    res.json('Delete Usuarios');
});

app.listen(3000, () => {
    console.log('Escuchando el puerto 3000');
});