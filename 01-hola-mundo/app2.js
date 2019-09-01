/*jshint esversion: 6 */
function saludar(nombre) {
    let mensaje = `Hola ${ nombre }`;

    return mensaje;
}

let saludo = saludar('Diego');

console.log(saludo);