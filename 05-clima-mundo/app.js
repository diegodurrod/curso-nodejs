/*jshint esversion: 2017 */
const lugar = require('./lugar/lugar');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

lugar.getLugarLatLng(argv.direccion)
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log('ERROR!!', err);
    });