// 13. Cree un programa que cumpla con los siguientes requerimientos: En una clínica, se
// requiere un programa donde el usuario pueda consultar el día de su cita mediante su
// documento. La cita debe tener día y fecha. Si el usuario consulta, el programa debe
// mostrarle sus nombres, seguidos del día y hora de su cita. Una vez hecha la consulta, el
// programa le debe mostrar al usuario un mensaje preguntándole si desea cambiar el día ó
// fecha de su cita, de ser así el programa debe realizar tal cambio y mostrarle al usuario que
// el cambio solicitado ha sido exitoso.

const pacientes = [
    {documento: "1234", nombre: "Juan Lopez", cita: {dia: "Lunes", hora: "10:00 AM"}},
    {documento: "4321", nombre: "Maria Perez", cita: {dia: "Miercoles", hora: "2:00 PM"}},
    {documento: "112233", nombre: "Pedro Gutierrez", cita: {dia: "Viernes", hora: "4:30 PM"}},
]

function consultarCita(documento){
    const paciente = pacientes.find(p => p.documento === documento);
    if(!paciente){
        console.log("Paciente no encontrado");
    }

    console.log(`Nombre: ${paciente.nombre}`);
    console.log(`Día de la cita: ${ paciente.cita.dia}`);
    console.log(`Hora de la cita: ${paciente.cita.hora}`);

    const deseaCambiar = prompt("¿Desea cambiar el día o la hora de su cita? (Si/No").toLowerCase();

    if(deseaCambiar === "si"){
        const nuevoDia = prompt("Ingrese el nuevo día de su cita: ");
        paciente.cita.dia = nuevoDia;
        const nuevaHora = prompt("Ingrese la nueva hora de su cita: ");
        paciente.cita.hora = nuevaHora;

        console.log(`Se ha realizado el cambio de su cita para el día: ${paciente.cita.dia} a las ${ paciente.cita.hora}`);
    }else{
        console.log("Fue un gusto atenderte.")
    }
}

const documentoUsuario = prompt("Ingrese el documento del usuario para consultar su cita: ");
consultarCita(documentoUsuario);