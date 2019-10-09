/*jshint esversion: 2017 */
const jwt = require('jsonwebtoken');

// Verificar Token
let verificaToken = (req, res, next) => {
    let token = req.get('token'); // Nombre de la cabecera

    // Este metodo provee de la funcionalidad para verificar si el token es valido, para ello, necesita 3 parametros:
    // - token recibido
    // - seed que declaramos en la configuracion
    // - callback con el error (si hubiese) y la informacion decodificada (decoded = payload)
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }

        // Si no hay un error, a la parte del request del usuario, se le asigna la parte del payload del usuario
        req.usuario = decoded.usuario;

        // Hay que recordar, que si no se ejecuta el next(), no sigue la ejecucion del callback que lo invoca
        next();
    });
};

module.exports = {
    verificaToken
};