// 4. Dado el objeto {dos: 2, cinco: 5, siete: 7, cuarenta: 40, cincuenta: 50} recorrer el objeto y
// mostrar cuáles de los valores son pares.

let numeros = {dos: 2, cinco: 5, siete: 7, cuarenta: 40, cincuenta: 50};

for(const numero in numeros){
        const elemento = numeros[numero];
        if (elemento % 2 === 0) {
            console.log(`Propiedad: ${numero}: ${elemento}`);
        }
}
