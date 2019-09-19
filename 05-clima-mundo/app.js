/*jshint esversion: 2017 */
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log('ERROR!!', err);
//     });

// clima.getClima(40.419998, -3.700000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {
    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const tiempo = await clima.getClima(coordenadas.lat, coordenadas.lng);

        console.log(`El clima de ${ direccion } es de ${ tiempo }`);
    } catch (error) {
        throw new Error(`No se pudo determinar el clima de ${ direccion }`, error);
    }
};

getInfo(argv.direccion);