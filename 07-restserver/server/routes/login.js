/*jshint esversion: 2017 */
const express = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

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

        // Se declara el JWT
        // En el primer parametro se especifica el payload,
        // En el segundo parametro se especifica caducidad
        let token = jwt.sign({
            usuario: usuarioDB
        }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });

        res.json({
            ok: true,
            usuario: usuarioDB,
            token
        });
    });
});

// Configuraciones de Google
async function verify( token ) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
    //const userid = payload['sub'];
}

app.post('/google', (req, res) => {
    let token = req.body.idtoken;

    verify(token);

    res.json({
        body: req.body
    })
});

module.exports = app;