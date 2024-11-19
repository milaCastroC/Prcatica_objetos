// 15. Cree un programa el cual facilite a un cliente manejar su inventario de ropa, cada objeto
// representa un producto el cual tendrá las siguientes propiedades: nombre, categoría precio,
// cantidad y código.
// El usuario necesita poder agregar, editar, eliminar y visualizar cada uno de los
// productos y también tener otra opción la cual le permite visualizar todos sus
// productos.
// Al momento de agregar un nuevo producto se debe validar que el código del
// producto sea único y no se repita con algún otro, en dado caso que pase esto se le
// debe notificar al usuario.

let inventario = []; 

function agregarProducto(nombre, categoria, precio, cantidad, codigo) {
    const codigoExistente = inventario.some(producto => producto.codigo === codigo); //some() para verificar si ya existe un producto con el mismo código en el inventario

    if (codigoExistente) {
        console.error(`Error: Ya existe un producto con el código ${codigo}`);
        return;
    }

    const nuevoProducto = {
        nombre: nombre,
        categoria: categoria,
        precio: precio,
        cantidad: cantidad,
        codigo: codigo
    };

    inventario.push(nuevoProducto);
    console.log("Producto agregado exitosamente.");
}

// Función para editar un producto existente
function editarProducto(codigo, nombre, categoria, precio, cantidad) {
    const producto = inventario.find(producto => producto.codigo === codigo); //find() devuelve el primer producto con el codigo correspondiente.
    if (!producto) {
        console.log("Producto no encontrado.");
        return;
    }

    //se actualizan sus atributos solo si se pasa un nuevo valor:
    if (nombre) producto.nombre = nombre;
    if (categoria) producto.categoria = categoria;
    if (precio) producto.precio = precio;
    if (cantidad) producto.cantidad = cantidad;

    console.log("Producto editado exitosamente.");
}

// Función para eliminar un producto
function eliminarProducto(codigo) {
    const index = inventario.findIndex(producto => producto.codigo === codigo); //findIndex() busca el índice del producto con el código correspondiente en el inventario.
    if (index === -1) { 
        console.log("Producto no encontrado.");
        return;
    }

    inventario.splice(index, 1);
    console.log("Producto eliminado exitosamente.");
}

// Función para visualizar un producto específico
function visualizarProducto(codigo) {
    const producto = inventario.find(producto => producto.codigo === codigo);
    if (!producto) {
        console.log("Producto no encontrado.");
        return;
    }

    console.log(producto);
}

// Función para visualizar todos los productos
function visualizarTodosLosProductos() {
    if (inventario.length === 0) {
        console.log("No hay productos en el inventario.");
        return;
    }

    inventario.forEach(producto => console.log(producto));
}

// Ver todos los productos
console.log("Inventario completo:");
visualizarTodosLosProductos();

// Agregar productos
agregarProducto("Camiseta", "Ropa Casual", 15.99, 50, "001");
agregarProducto("Jeans", "Ropa Casual", 35.99, 30, "002");
agregarProducto("Chaqueta", "Ropa de Invierno", 55.99, 20, "003");

// Ver todos los productos
console.log("Inventario completo:");
visualizarTodosLosProductos();

// Editar un producto
editarProducto("002", "Jeans Azul", "Ropa Casual", 32.99, 25);

// Ver un producto específico
console.log("Producto con código 002:");
visualizarProducto("002");

// Eliminar un producto
eliminarProducto("003");

// Ver todos los productos después de eliminación
console.log("Inventario después de eliminación:");
visualizarTodosLosProductos();