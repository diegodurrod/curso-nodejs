/*jshint esversion: 2017 */
const express = require('express');
const { verificaToken } = require('../middlewares/autenticacion');

let app = express();
let Producto = require('../models/producto');

// Obtener todos los productos
app.get('/productos', verificaToken, (req, res) => {
    // Paginacion
    let desde = req.query.desde || 0;
    desde = Number(desde);

    let limite = req.query.limite || 5;
    limite = Number(limite);

    Producto.find({})
        .populate('usuario', 'nombre email', 'Usuario')
        .populate('categoria', 'nombre precioUni descripcion', 'Categoria')
        .skip(desde)
        .limit(limite)
        .exec((err, productoDB) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                producto: productoDB
            });
        });
    // ToDo:
    // Obtener todos los productos
    // populate: usuario y categoria
    // paginacion de resultados
});

// Obtener un producto por id
app.get('/productos/:id', verificaToken, (req, res) => {
    let id = req.body.id;

    Producto.findById(id)
        .populate('usuario', 'nombre email', 'Usuario')
        .populate('categoria', 'nombre precioUni descripcion', 'Categoria')
        .exec((err, productoDB) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            if (!productoDB) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'No existe el producto'
                    }
                });
            }

            res.json({
                ok: true,
                producto: productoDB
            });
        });
    // ToDo:
    // Obtener un producto por id
    // populate: usuario y categoria
    // paginacion de resultados
});

// Crear un nuevo producto
app.post('/productos', verificaToken, (req, res) => {
    let body = req.body;
    let categoria = req.body.categoria;
    let usuario = req.usuario;

    let producto = new Producto({
        nombre: body.nombre,
        precioUni: body.precioUni,
        descripcion: body.descripcion,
        categoria,
        usuario
    });

    producto.save((err, productoDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.status(201).json({
            ok: true,
            producto: productoDB
        });
    });

    // ToDo:
    // Vincular el usuario
    // Vincular la categoria del listado
});

// Actualizar un producto determinado
app.put('/productos/:id', (req, res) => {
    let id = req.body.id;
    let body = _.pick(req.body, ['nombre', 'precioUni', 'descripcion', 'categoria', 'usuario']);

    Producto.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
        setDefaultsOnInsert: true, // Necesario con runValidators
        context: 'query' // Necesario con runValidators
    }, (err, productoDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            Producto: productoDB
        });
    });

    // ToDo:
    // Ya sabemos de lo que trata esto
});

// Elimina u producto determinado
app.delete('/productos/:id', (req, res) => {
    let id = req.params.id;

    Producto.findByIdAndUpdate(id, { disponible: false }, (err, productoDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!productoDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Producto no encontrado'
                }
            });
        }

        res.json({
            ok: true,
            message: 'Producto borrado con exito'
        });
    });
    // ToDo:
    // Fisicamente estara disponible, pero Disponible pasara a ser false
});

module.exports = app;