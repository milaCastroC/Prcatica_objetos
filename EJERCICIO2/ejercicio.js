// 2. Cree un objeto vacío, p.e. let objeto = {} y agregue tres pares clave-valor. Imprima todo el
// objeto para verificar que se han agregado las nuevos pares clave-valor

let objetos = {};

objetos["usuario1"] = { nombre: "Camila", id: "1" };
objetos["usuario2"] = { nombre: "Juan", id: "2" };
objetos["usuario3"] = { nombre: "Pepe", id: "3" };

console.log("Contenido del objeto:");
for (const clave in objetos) {
  console.log(`Clave: ${clave}, Nombre: ${objetos[clave].nombre}, ID: ${objetos[clave].id}`);
}