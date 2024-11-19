// 1. Cree un objeto donde se almacenen los productos de un supermercado con su respectivo
// precio. Los productos son:
// Papa, Arroz, Lentejas, Aceite. Luego imprima cada uno de los precios almacenados en el
// objeto anterior con su respectivo producto.

const productos = {
    Papa: 1500,     
    Arroz: 3000,
    Lentejas: 2500,
    Aceite: 8000,
  };
  
  // Imprimir cada producto con su respectivo precio
  console.log("Lista de productos y precios:");
  for (const producto in productos) {
    console.log(`${producto}: $${productos[producto]}`);
  }
