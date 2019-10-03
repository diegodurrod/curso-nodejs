/*jshint esversion: 2017 */
const express = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');

const app = express();

app.get('/', function(req, res) {
    res.json('Hello World');
});

app.get('/usuarios', function(req, res) {
    res.json('Get Usuarios');
});

app.post('/usuarios', function(req, res) {
    let body = req.body;

    // Creamos el objeto y le pasamos por parametro lo que obtenemos como parametros POST
    // Lo que hacemos en este caso es pasar a la base de datos los valores segun el modelo cargado
    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        estado: body.estado,
        role: body.role
    });

    // Para guardar en la base de datos necesitamos un callback
    // - Nos devuelve un error si existiese
    // - Nos devuelve el usuario de la base de datos una vez creado
    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        // usuarioDB.password = null;

        res.json({
            ok: true,
            usuario: usuarioDB
        });
    });
});

app.put('/usuarios/:id', function(req, res) {
    let id = req.params.id;
    let body = req.body;

    // Encuentra el usuario por la id y lo actualiza posteriormente
    Usuario.findByIdAndUpdate(id, body, { new: true }, (err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        });
    });

    // res.json({
    //     id
    // });
});

app.delete('/usuarios', function(req, res) {
    res.json('Delete Usuarios');
});

module.exports = app;