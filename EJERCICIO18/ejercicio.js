// 18. Cree un programa el cual ayude a gestionar las reservas de habitaciones de un hotel.
// Crear un arreglo habitaciones donde cada habitación tenga numero, tipo(Suite,
// Doble, Normal), disponible (booleano), y reservas (arreglo de objetos con cliente y
// diasReservados).
// Crear una función reservarHabitación que permita reservar una habitación si está
// disponible.
// Crear una función cancelarReserva para cancelar la reserva de un cliente específico.
// Crear una función habitacionesDisponibles que devuelva un listado de habitaciones
// disponibles por tipo.

let habitaciones = [
    { numero: 101, tipo: "Suite", disponible: true, reservas: [] },
    { numero: 102, tipo: "Doble", disponible: true, reservas: [] },
    { numero: 103, tipo: "Normal", disponible: true, reservas: [] },
    { numero: 104, tipo: "Suite", disponible: true, reservas: [] },
    { numero: 105, tipo: "Doble", disponible: false, reservas: [{ cliente: "Juan", diasReservados: 3 }] }
];

function reservarHabitacion(numero, cliente, diasReservados){
    const habitacion = habitaciones.find(habitacion => habitacion.numero === numero);
    if(!habitacion){
        console.log(`La habitacion ${numero} no existe`);
        return;
    }

    if(!habitacion.disponible){
        console.log(`La habitacion ${numero} no está disponible`);
        return;
    }

    habitacion.reservas.push({
        cliente: cliente,
        diasReservados: diasReservados
    });
    habitacion.disponible = false;
    console.log(`Habitación ${numero} reservada por ${cliente} durante ${diasReservados} días.`);
}

function cancelarReserva(cliente) {
    const habitacion = habitaciones.find(habitacion =>habitacion.reservas.some(reserva => reserva.cliente === cliente));

    if (!habitacion) {
        console.log(`No se encontró una reserva para el cliente ${cliente}.`);
        return;
    }

    habitacion.reservas = habitacion.reservas.filter(reserva => reserva.cliente !== cliente);

    // Si no quedan reservas en la habitación, marcarla como disponible
    habitacion.disponible = habitacion.reservas.length === 0;

    console.log(`Reserva del cliente ${cliente} cancelada en la habitación ${habitacion.numero}.`);
}

function habitacionesDisponibles(tipo) {
    const disponibles = habitaciones.filter(habitacion => habitacion.disponible && habitacion.tipo === tipo);

    if (disponibles.length === 0) {
        console.log(`No hay habitaciones disponibles del tipo ${tipo}.`);
        return [];
    }

    console.log(`Habitaciones disponibles del tipo ${tipo}:`, disponibles.map(hab => hab.numero));
    return disponibles;
}


// Reservar habitaciones
reservarHabitacion(101, "Ana", 5);
reservarHabitacion(105, "Carlos", 2); // Fallará porque no está disponible

// Cancelar reserva
cancelarReserva("Juan");

// Listar habitaciones disponibles
habitacionesDisponibles("Suite");
habitacionesDisponibles("Doble");
habitacionesDisponibles("Normal");