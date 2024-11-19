// 14. Crear un sistema que emita alertas cuando el stock de productos esté bajo.
// Crear un arreglo de productos donde cada elemento tenga nombre, stock y umbral.
// Crear una función verificarStock que recorra el arreglo y emita una alerta para cada
// producto cuyo stock esté por debajo de su umbral.
// Crear una función actualizarStock que reciba un nombre de producto y una cantidad
// a restar o sumar, y actualice el stock.

const articulos = [
    {nombre: "audífonos", stock: 200, umbral: 30},
    {nombre: "celular", stock: 100, umbral: 20},
    {nombre: "laptop", stock: 50, umbral: 10},
    {nombre: "tablet", stock: 25, umbral: 15},
    {nombre: "auriculares", stock: 5, umbral: 10}
];

function verificarStock() {
    for (const articulo of articulos) {
        if (articulo.stock < articulo.umbral) {
            console.log(`ALERTA: El stock de ${articulo.nombre} es menor al umbral.`);
        }
    }
}

function actualizarStock(nombreProducto, cantidad, operacion) {
    const articulo = articulos.find(item => item.nombre.toLowerCase() === nombreProducto.toLowerCase());

    if (articulo) {
        if (operacion === 'sumar') {
            articulo.stock += cantidad;
        } else if (operacion === 'restar') {
            articulo.stock -= cantidad;
        } else {
            console.log("Operación no válida.");
            return;
        }
        console.log(`Stock de ${articulo.nombre} actualizado: ${articulo.stock}`);
    } else {
        console.log("Producto no encontrado.");
    }
}

verificarStock();

actualizarStock("auriculares", 10, "sumar");
actualizarStock("laptop", 45, "restar");

verificarStock();