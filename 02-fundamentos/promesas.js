/*jshint esversion: 6 */
let empleados = [{
        id: 1,
        nombre: 'Diego'
    },
    {
        id: 2,
        nombre: 'Melissa'
    },
    {
        id: 3,
        nombre: 'Juan'
    },
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        //console.log(empleadoDB);

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${ id }`);
        } else {
            resolve(empleadoDB);
        }
    });
};

let getSalario = (nombre) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.nombre === nombre);

        if (!empleadoDB) {
            reject(`No se ningun usuario con el nombre ${ nombre }`);
        } else {
            getEmpleado(empleadoDB.id).then(empleado => {
                let salarioDB = salarios.find(salario => salario.id === empleadoDB.id);

                if (!salarioDB) {
                    reject(`No se encontro ningun salario para el usuario ${ nombre }`);
                } else {
                    resolve(salarioDB);
                }
                //console.log(empleadoDB.id);
            }, (err) => {
                reject(err);
            });
        }
    });
};

// getEmpleado(2).then(empleado => {
//     console.log('Empleado de BD', empleado);
// }, (err) => {
//     console.log(err);
// });

getSalario('Diego').then(empleado => {
    console.log(empleado);
}, (err) => {
    return console.log(err);
});