/*jshint esversion: 2017 */
const fs = require('fs');
const colors = require('colors');

crearTabla = async(base, limite) => {
    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${ base } * ${ i } = ${ base * i }\n`;
    }

    return data;
};

listarTabla = async(base, limite = 10) => {

    console.log('#####################################'.green);
    console.log(`########### Tabla del ${ base } ###########`.green);
    console.log('#####################################'.green);

    if (!Number(base)) {
        throw new Error(`El valor introducido ${ base } no es un numero`);
    }

    let tabla = await crearTabla(base, limite);

    console.log(tabla);

    return base;
};

crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`);
            //console.log(`El archivo que corresponde a la tabla del ${ base } ha sido creado`);
        });
    });
}

module.exports = {
    crearArchivo, // es como hacer crearArchivo = crearArchivo
    listarTabla
};