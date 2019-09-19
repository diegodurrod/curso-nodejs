/*jshint esversion: 2017 */
const axios = require('axios');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);
const encodeURL = encodeURI(argv.direccion);

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeURL }`,
    headers: {
        'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
        'x-rapidapi-key': '9956769caemshd54829e18324610p1fcad7jsn3db3c9ad659c'
    }
});

instance.get()
    .then((resp) => {
        console.log(resp.data.Results[0]);
    }).catch((err) => {
        console.log('ERROR!!!!', err);
    });