/*jshint esversion: 2017 */
const express = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');

const app = express();

app.post('/login', (req, res) => {
    let body = req.body;

    // La primera condicion es para establecer una condicion de busqueda
    // La segunda condicion es para establecer un callback de ejecucion de la consulta
    Usuario.findOne({ email: body.email }, (err, usuarioDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        // Si no existe el usuario
        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "Usuario o contrasena incorrectos"
                }
            });
        }

        // Si la contrasena no coincide con la encriptada en la base de datos
        if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "Usuario o contrasena incorrectos"
                }
            });
        }

        res.json({
            ok: true,
            usuario: usuarioDB,
            token: '123'
        });
    });

});

module.exports = app;