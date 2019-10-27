/*jshint esversion: 2017 */
process.env.PORT = process.env.PORT || 3000;

// Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Vencimiento del token
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30 * 30;

// Seed de autenticacion
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// Base de datos
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'DB produccion';
}

process.env.urlDB = urlDB;

// Google Client ID
process.env.CLIENT_ID = process.env.CLIENT_ID || '59888989773-l9e08et6s6tun5gp23rijm8v6it0b6ke.apps.googleusercontent.com'