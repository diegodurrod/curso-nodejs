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

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    //console.log(empleadoDB);

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${ id }`);
    } else {
        callback(null, empleadoDB);
    }
};

let getSalario = (nombre, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.nombre === nombre);

    if (!empleadoDB) {
        callback(`No se ningun usuario con el nombre ${ nombre }`);
    } else {
        getEmpleado(empleadoDB.id, (err, empleado) => {
            if (err) {
                return console.log(err);
            }

            let salarioDB = salarios.find(salario => salario.id === empleadoDB.id);

            if (!salarioDB) {
                callback(`No se encontro ningun salario para el usuario ${ nombre }`);
            } else {
                callback(null, salarioDB);
            }
            //console.log(empleadoDB.id);
        });
    }
};

// getEmpleado(1, (err, empleado) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(empleado);
// });

getSalario('Diego', (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado);
});