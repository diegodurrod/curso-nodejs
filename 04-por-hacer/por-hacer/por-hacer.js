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

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
};

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer; // Devolvemos este objeto para tener una retroalimentacion
};

const getListado = () => {
    cargarDB();

    return listadoPorHacer;
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const borrar = (descripcion) => {
    cargarDB();

    let encontrado = false; // Por defecto
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer = listadoPorHacer.filter(tarea => descripcion !== tarea.descripcion);
        guardarDB();
        encontrado = true;
    }

    return encontrado;
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};