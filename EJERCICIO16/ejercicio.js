// 16. Cree un programa el cual ayude a gestionar el registro de vehículos en un parqueadero.
// Cree un arreglo el cual contenga objetos de tipo vehiculo en su interior, estos vehículos
// tendrán como propiedad, marca, placa y hora de entrada, El programa debe brinda la
// posibilidad de ingresar nuevos vehiculos al arreglo, y eliminarlos, adicionalmente dede
// realizar una función la cual determine el tiempo que paso el vehiculo estacionado y el valor
// que debe pagar en el parqueadero, el valor de la hora tiene un costo de 2.500 pesos.

let parqueadero = [];

function registrarVehiculo(marca, placa){
    const horaEntradaStr = prompt("Ingrese la hora de entrada del vehículo: ");
    const [horas, minutos] = horaEntradaStr.split(':').map(Number);

     // Validar que la hora ingresada sea válida
     if (horas < 0 || horas > 23 || minutos < 0 || minutos > 59) {
        console.log("Hora de entrada inválida. Inténtelo nuevamente.");
        return;
    }

    const horaEntrada = new Date();
    horaEntrada.setHours(horas, minutos, 0, 0);

    const vehiculo= {
        marca: marca,
        placa: placa,
        horaEntrada: horaEntrada
    }

    parqueadero.push(vehiculo);
    console.log(`Vehículo registrado: ${marca} - ${placa} a las ${horaEntrada}`);
}

function eliminarVehiculo(placa){
    const indice = parqueadero.findIndex(vehiculo => vehiculo.placa === placa);
    if(indice === -1){
        console.log(`Vehículo con placa ${ placa } no encontrado`);
    }

    parqueadero.splice(indice, 1);
    console.log(`Vehículo con placa ${ placa } eliminado. `);
}

function calcularEstacionamiento(placa){
    const vehiculo = parqueadero.find(vehiculo => vehiculo.placa === placa);
    if (!vehiculo) {
        console.log(`Vehículo con placa ${placa} no encontrado.`);
        return;
    }

    const horaSalidaStr = prompt("Ingrese la hora de salida del vehículo: ");
    const [horas, minutos] = horaSalidaStr.split(':').map(Number);

    if (horas < 0 || horas > 23 || minutos < 0 || minutos > 59) {
        console.log("Hora de salida inválida. Inténtelo nuevamente.");
        return;
    }

    const horaSalida = new Date();
    horaSalida.setHours(horas, minutos, 0, 0); // Establecer la hora ingresada

    // Calcular el tiempo estacionado en horas
    const tiempoEstacionado = (horaSalida - vehiculo.horaEntrada) / (1000 * 60 * 60);
    if (tiempoEstacionado < 0) {
        console.log("La hora de salida no puede ser anterior a la hora de entrada.");
        return;
    }

    const valorTotal = Math.ceil(tiempoEstacionado) * 2500;

    console.log(`Vehículo con placa ${placa}:`);
    console.log(`Tiempo estacionado: ${Math.ceil(tiempoEstacionado)} horas`);
    console.log(`Valor a pagar: ${valorTotal} pesos`);
}

registrarVehiculo('Toyota', 'ABC123'); // Registrar un vehículo

calcularEstacionamiento('ABC123'); 
eliminarVehiculo('ABC123'); // Eliminar el vehículo
