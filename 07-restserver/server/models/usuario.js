/*jshint esversion: 2017 */
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol valido'
};

let Schema = mongoose.Schema;

// Crea una coleccion para mongoDB
let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        unique: true,
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
        type: String,
        // required: [true, 'El rol es necesario'],
        default: 'USER_ROLE',
        enum: rolesValidos
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

// Modificamos el objeto JSON que devuelde una vez insertado en la base de datos
// No utilizar funcion de flechas
usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();

    delete userObject.password;

    return userObject;
}

usuarioSchema.plugin(uniqueValidator, { message: 'El campo {PATH} debe de ser unico' });

module.exports = mongoose.model('Usuario', usuarioSchema); // Se le especifica el nombre que se le va a dar finalmente