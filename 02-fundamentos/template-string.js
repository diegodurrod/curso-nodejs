/*jshint esversion: 6 */
let nombre = 'Deadpool';
let real = 'Wade Winston';

// console.log(nomre + ' ' + real);
// console.log(`${ nombre } ${ real }`);

let nombreCompleto = nombre + ' ' + real;
let nombreTemplate = `${ nombre } ${ real }`;

console.log(nombreCompleto === nombreTemplate);

function getNombre() {
    return `${nombre} ${real}`;
}

console.log(`El nombre de: ${ getNombre() }`);