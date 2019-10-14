/*jshint esversion: 2017 */
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol valido'
};

let categoriaSchema = new Schema({
    // Terminar de completar
    nombre,
    descripcion,
    usuario
});

module.exports = mongoose.model('Usuario', categoriaSchema);