/*jshint esversion: 2017 */
const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodeURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeURL }`,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': '9956769caemshd54829e18324610p1fcad7jsn3db3c9ad659c'
        }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ direccion }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    };
};

module.exports = {
    getLugarLatLng
};