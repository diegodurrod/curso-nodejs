/*jshint esversion: 2017 */
const express = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const _ = require('underscore'); // Por defecto se suele llamar _ para hacer el require

const app = express();

app.get('/', function(req, res) {
    res.json('Hello World');
});

app.get('/usuarios', function(req, res) {

    let desde = req.query.desde || 0;
    desde = Number(desde);

    let limite = req.query.limite || 5;
    limite = Number(limite);

    Usuario.find({}, 'nombre email role estado google img') // Parecido a findAll(), el segundo parametro define que campos queremos que devuelva
        .skip(desde) // Salta los primeros 5 registros
        .limit(limite) // Limitamos a 5 registros
        .exec((err, usuarios) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            // Cuenta el numero de registro con una condicion (Como el SELECT count(*))
            // Si se necesita filtrar, se debe de hacer como objeto, al igual que con el find
            Usuario.count({}, (err, conteo) => {
                res.json({
                    ok: true,
                    usuarios,
                    cuantos: conteo
                });
            });

            // res.json({
            //     ok: true,
            //     usuarios
            // });
        });
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
    // solo obtiene el objeto del primer parametro, pero con las propiedades del array que se le pasa en el segundo parametro
    let body = _.pick(req.body, ['nombre', 'email', 'img', 'role', 'estado']);
    //let body = req.body;

    // Si queremos que no modifique ciertos parametros, podemos eliminar las propiedades, pero no es muy eficiente
    delete body.password;
    delete body.google;

    // Encuentra el usuario por la id y lo actualiza posteriormente
    Usuario.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
        setDefaultsOnInsert: true, // Necesario con runValidators
        context: 'query' // Necesario con runValidators
    }, (err, usuarioDB) => {
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

app.delete('/usuarios/:id', function(req, res) {
    let id = req.params.id;

    Usuario.findByIdAndRemove(id, (err, usuarioBorrado) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        if (!usuarioBorrado) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario no encontrado'
                }
            });
        }

        res.json({
            ok: true,
            usuario: usuarioBorrado
        });
    });
});

module.exports = app;