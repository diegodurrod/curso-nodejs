/*jshint esversion: 6 */
// function sumar(a, b) {
//     return a + b;
// }

//console.log(sumar(10, 20));

// let sumar = (a, b) => (a + b);
// let saludar = () => 'Hola Mundo';

// console.log(saludar());

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
};