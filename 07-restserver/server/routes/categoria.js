/*jshint esversion: 2017 */
const express = require('express');

let { verificaToken } = require('../middlewares/autenticacion');

let app = express();

let Categoria = require('../models/categoria');

// Deben de mostrarse todas la categorias
app.get('/categoria', (req, res) => {

});

// Mostrar una categoria por ID
app.get('/categoria/:id', (req, res) => {
    // Categoria.findById()
});

// Crear nueva categoria
app.post('/categoria', (req, res) => {
    // debe de regresar la nueva categoria creada
});

// Actualiza la categoria
app.put('/categoria/:id', (req, res) => {

});

// Elimina la categoria
// Solo un administrador debe de eliminarla fisicamente
app.delete('/categoria/:id', (req, res) => {

});



module.exports = app;