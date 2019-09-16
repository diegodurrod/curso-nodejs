/*jshint esversion: 2017 */

const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = async() => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err)
            throw new Error('No se puso guardar');
        // else
        //     resolve(`tabla-${ base }.txt`);
        //console.log(`El archivo que corresponde a la tabla del ${ base } ha sido creado`);
    });

};

const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer; // Devolvemos este objeto para tener una retroalimentacion
};

module.exports = {
    crear
};