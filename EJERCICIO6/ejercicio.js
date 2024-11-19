// 6. Dado el siguiente objeto { numeros: [45, 78, 22, 89, 8] } recorrer el valor de la clave
// números.

let objeto= { numeros: [45, 78, 22, 89, 8] };

let valorNumeros = objeto.numeros;
valorNumeros.forEach((numero) => {
  console.log(numero);
});