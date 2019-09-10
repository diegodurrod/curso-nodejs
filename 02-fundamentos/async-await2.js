/*jshint esversion: 2017 */
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

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    //console.log(empleadoDB);

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${ id }`);
    } else {
        return empleadoDB;
    }

};

let getSalario = async(nombre) => {

    let empleadoDB = empleados.find(empleado => empleado.nombre === nombre);

    if (!empleadoDB) {
        throw new Error(`No se ningun usuario con el nombre ${ nombre }`);
    } else {
        let empleado = await getEmpleado(empleadoDB.id);
        let salarioDB = salarios.find(salario => salario.id === empleadoDB.id);

        if (!salarioDB) {
            throw new Error(`No se encontro ningun salario para el usuario ${ nombre }`);
        } else {
            return salarioDB;
        }
        //console.log(empleadoDB.id);
        // }, (err) => {
        //     throw new Error(err);
        // });
    }

};

let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let respuesta = await getSalario(empleado.nombre);

    return `${ empleado.nombre } tiene un salario de ${ respuesta.salario }`;
}

getInformacion(0)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));