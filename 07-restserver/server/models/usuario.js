/*jshint esversion: 2017 */
const mongoose = require('mongoose');

let Schema = mongoose.Schema;

// Crea una coleccion para mongoDB
let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        required: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'La contrasena es obligatoria']
    },
    img: {
        type: String,
        required: false
    }, // no es obligatoria
    role: {
        // type: String,
        // required: [true, 'El rol es necesario'],
        default: 'USER_ROLE'
    }, // default: 'USER_ROLE'
    estado: {
        type: Boolean,
        required: [true, 'El estado es necesario']
    }, // Boolean
    google: {
        type: Boolean,
        required: [false, 'El campo Google es necesario']
    }
});

module.exports = mongoose.model('Usuario'); // Se le especifica el nombre que se le va a dar finalmente