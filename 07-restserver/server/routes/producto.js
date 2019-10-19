/*jshint esversion: 2017 */
const express = require('express');
const { verificaToken } = require('../middlewares/autenticacion');

let app = express();
let Producto = require('../models/producto');

// Obtener todos los productos
app.get('/productos', (req, res) => {
    // ToDo:
    // Obtener todos los productos
    // populate: usuario y categoria
    // paginacion de resultados
});

// Obtener un producto por id
app.get('/productos:id', (req, res) => {
    // ToDo:
    // Obtener un producto por id
    // populate: usuario y categoria
    // paginacion de resultados
});

// Crear un nuevo producto
app.post('/productos', (req, res) => {
    // ToDo:
    // Vincular el usuario
    // Vincular la categoria del listado
});

// Actualizar un producto determinado
app.put('/productos/:id', (req, res) => {
    // ToDo:
    // Ya sabemos de lo que trata esto
});

// Elimina u producto determinado
app.delete('/productos/:id', (req, res) => {
    // ToDo:
    // Fisicamente estara disponible, pero Disponible pasara a ser false
});

module.exports = app;