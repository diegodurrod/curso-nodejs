/*jshint esversion: 2017 */

const crearMensaje = (nombre, mensaje) => {
    return {
        nombre, 
        mensaje,
        fecha: new Date().getTime()
    };
}

module.exports = {
    crearMensaje
};