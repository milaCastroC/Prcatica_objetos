// 17. Crear un sistema para administrar empleados y sus horas trabajadas.Crear un arreglo
// empleados donde cada empleado tenga nombre, id, y horasTrabajadas (un arreglo de
// horas).Crear una función agregarHoras que permita agregar horas trabajadas a un
// empleado.
// Crear una función calcularPago que calcule el salario semanal basado en una tarifa
// fija.
// Crear una función empleadosConHorasExtras que devuelva los empleados que
// trabajaron más de 40 horas en una semana.

let empleados = [];

const TARIFA_FIJA = 20000;// Tarifa fija por hora

function agregarEmpleado(nombre, id){
    empleados.push({
        nombre: nombre,
        id: id,
        horasTrabajadas: []
    })
    console.log(`Empleado agregado: ${nombre} (ID: ${id})`);
}

function agregarHoras(id, horas){
    const empleado = empleados.find(empleado => empleado.id === id);
    if(!empleado){
        console.log(`Empleado con ID ${id} no encontrado.`);
        return;
    }

    empleado.horasTrabajadas.push(horas);
    console.log(`Horas agregadas a ${empleado.nombre}: ${horas} horas`);
}

function calcularPago(id){
    const empleado = empleados.find(empleado => empleado.id === id);
    if(!empleado){
        console.log(`Empleado con ID ${id} no encontrado.`);
        return;
    }

    const totalHoras = empleado.horasTrabajadas.reduce((acumulador, horas) => acumulador + horas, 0);
    const salario = totalHoras * TARIFA_FIJA;

    console.log(`Salario semanal de ${empleado.nombre}: $${salario}`);
    return salario;
}

function empleadosConHorasExtras(){
    return empleados.filter(empleado =>{
        const totalHoras = empleado.horasTrabajadas.reduce((acumulador, horas) => acumulador + horas, 0);
        return totalHoras > 40;
    }).map(emp => emp.nombre);
}

// Agregar empleados
agregarEmpleado("Juan", 1);
agregarEmpleado("Ana", 2);
agregarEmpleado("Luis", 3);

// Agregar horas trabajadas
agregarHoras(1, 10);
agregarHoras(1, 15);
agregarHoras(2, 25);
agregarHoras(3, 30);
agregarHoras(3, 15);

// Calcular salarios
calcularPago(1);
calcularPago(2);
calcularPago(3);

// Obtener empleados con horas extras
const extras = empleadosConHorasExtras();
console.log("Empleados con horas extras:", extras);
