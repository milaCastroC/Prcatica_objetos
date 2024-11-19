// Cree un programa el cual cumpla con los siguientes requerimientos, muestre la lista de
// inscritos y permita actualizar sus calificaciones.
// ● Crear un arreglo estudiantes donde cada elemento sea un objeto con
// nombre, edad, matrícula y calificaciones (un arreglo de números).
// ● Crear una función calcularPromedio que reciba una matrícula y devuelva el
// promedio de calificaciones de ese estudiante.
// ● Crear una función actualizarCalificaciones que reciba la matrícula y un nuevo
// arreglo de calificaciones, y actualice la información del estudiante
// correspondiente.
const estudiantes = [
    { nombre: "Juan", edad: 20, matricula: "J1", calificaciones: [85, 90, 78]},
    { nombre: "Maria", edad: 22, matricula: "M1", calificaciones: [88, 92, 80]},
    { nombre: "Pedro", edad: 21, matricula: "P1", calificaciones: [70, 75, 65]}
]

function calcularPromedio(matricula){
    const estudiante = estudiantes.find(e => e.matricula === matricula);
    if(!estudiante){
        console.log(`Estudiante con matrícula ${ matricula } no encontrado. `);
        return;
    }
    let suma = 0;
    let calificaciones = estudiante.calificaciones;
    for(let i = 0; i < calificaciones.length; i++){
        suma += calificaciones[i];
    } 
    let promedio = suma / calificaciones.length;
    return promedio;
}

function actualizarCalificaciones(matricula, nuevasCalificaciones){
    const estudiante = estudiantes.find(e => e.matricula === matricula);
    if(!estudiante){
        throw new Error("Estudiante no encontrado");
    }
    estudiante.calificaciones = nuevasCalificaciones;
    console.log(`Calificaciones actualizadas para la matrícula ${ matricula }.`)
}

console.log("Promedio de Juan: ", calcularPromedio("J1"));
actualizarCalificaciones("J1", [95, 93, 90]);
console.log("Promedio actualizado de Juan: ", calcularPromedio("J1"));