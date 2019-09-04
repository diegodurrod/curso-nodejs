/*jshint esversion: 7 */

// let getNombre = () => {
//     return new Promise((resolve, reject) => {
//         resolve('Diego');
//     });
// };

// Equivale a la función anterior de promesas
// let getNombre = async() => {
//     // Nos inventamos un error para forzar la devolucion de un error en la promesa
//     throw new Error('No existe un nombre para ese usuario');

//     return 'Diego';
// };

// Vamos a probar el poder del Async y el Await
let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Diego');
        }, 3000)
    });
};

// Con el await, espera a la ejecucion de la funcion llamda, digamos que dentro de un hilo de ejecucion, hace sincrona esa funcion
let saludo = async() => {
    let nombre = await getNombre();

    return `Hola ${ nombre }`;
}

saludo().then(mensaje => {
        console.log(mensaje);
    })
    .catch(e => {
        console.log('Error de ASYNC', e);
    })