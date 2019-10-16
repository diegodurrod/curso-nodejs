/*jshint esversion: 2017 */
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol valido'
};

let Schema = mongoose.Schema;

let categoriaSchema = new Schema({
    // Terminar de completar
    nombre: {
        type: String,
        required: [true, 'El nombre de la categoría es necesario']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción de la categoría es necesaria']
    },
    usuario: {
        type: String,
        required: [true, 'El identificador del usuario es obligatorio']
    }
});

categoriaSchema.plugin(uniqueValidator, { message: 'El campo {PATH} debe de ser unico' });

module.exports = mongoose.model('Categoria', categoriaSchema);