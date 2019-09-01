/*jshint esversion: 6 */
let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
};

// Bien, pues esto es una destructuracion de un objeto
// Notese que las variables deben de tener el mismo nombre que las propiedades del objeto
//let { nombre, apellido, poder } = deadpool;
//console.log(nombre, apellido, poder);

// En esta segunda version, se creara una nueva variable asignandose a esta el valor de la propiedad nombre
let { nombre: primerNombre, apellido, poder } = deadpool;
console.log(primerNombre, apellido, poder);

// console.log(deadpool.getNombre());