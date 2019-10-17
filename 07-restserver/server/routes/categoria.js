/*jshint esversion: 2017 */
const express = require('express');

let { verificaToken } = require('../middlewares/autenticacion');

let app = express();

let Categoria = require('../models/categoria');

// Deben de mostrarse todas la categorias
app.get('/categoria', verificaToken, (req, res) => {
    Categoria.find({}, (err, categoriaDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            categoria: categoriaDB
        });
    });
});

// Mostrar una categoria por ID
app.get('/categoria/:id', verificaToken, (req, res) => {
    // Categoria.findById()
    let id = req.params.id;

    Categoria.findById(id, (err, categoriaDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            categoria: categoriaDB
        });
    });
});

// Crear nueva categoria
app.post('/categoria', verificaToken, (req, res) => {
    // debe de regresar la nueva categoria creada
    let body = req.body;
    let usuario = req.usuario;

    let categoria = new Categoria({
        nombre: body.nombre,
        descripcion: body.descripcion,
        usuario: usuario._id
    });

    categoria.save((err, categoriaDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            categoria: categoriaDB
        });
    });
});

// Actualiza la categoria
app.put('/categoria/:id', verificaToken, (req, res) => {
    let id = req.params.id;

    let body = _.pick(req.body, ['nombre', 'descripcion']);

    Categoria.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
        setDefaultsOnInsert: true, // Necesario con runValidators
        context: 'query' // Necesario con runValidators
    }, (err, categoriaDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            categoria: categoriaDB
        });
    });
});

// Elimina la categoria
// Solo un administrador debe de eliminarla fisicamente
app.delete('/categoria/:id', verificaToken, (req, res) => {
    let id = req.params.id;

    let body = {};

    Categoria.findOneAndRemove({ id }, (err, categoriaDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        if (!categoriaDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Categoria no encontrada'
                }
            });
        }

        res.json({
            ok: true,
            message: 'Categoria borrada con exito'
        });
    });
});

module.exports = app;