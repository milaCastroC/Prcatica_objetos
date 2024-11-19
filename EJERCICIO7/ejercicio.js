// 7. Dado el objeto { 3: "tres", 60: "sesenta", 10: "diez" } eliminar la clave valor 60-"sesenta".
// Imprima todo el objeto para verificar los cambios.

let objeto = { 3: "tres", 60: "sesenta", 10: "diez" };

delete objeto[60];

console.log("El objeto actualizado es: ", objeto)