/*jshint esversion: 2017 */
const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&APPID=05f5b1ac12a78e4193edc2cd82bff39f&units=metric`);

    const temp = resp.data.main.temp;

    return temp;
};

module.exports = {
    getClima
};