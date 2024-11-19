// 9. Cree un programa que pida al usuario el nombre de un producto existente en una tienda,
// luego, que le muestre el precio del producto. El usuario debe poder elegir de entre por lo
// menos cinco productos.

const productos = {
    papa: 1500,     
    arroz: 3000,
    lentejas: 2500,
    aceite: 8000,
    azucar: 2000,
};

console.log("Productos disponibles: ");
for(const producto in productos){
    console.log(`- ${producto}`);
}

const productoSeleccionado = prompt("Ingrese el nombre del producto que desea consultar: ").toLowerCase();

if(productos[productoSeleccionado] != undefined){
    console.log(`El precio de ${productoSeleccionado} es ${productos[productoSeleccionado]}`);
}else{
    console.log("El producto ingresado no está disponible en la tienda");
}