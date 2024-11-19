// 11. Cree un programa que solicite al usuario el nombre de uno de los cinco continentes,
// luego, muestre cinco países del continente seleccionado por el usuario, estos paises deben
// ser elementos de un arreglo.

const continentes = {
    asia: ["China", "India", "Japón", "Corea del Sur", "Indonesia"],
    africa: ["Nigeria", "Egipto", "Sudáfrica", "Kenia", "Argelia"],
    europa: ["Francia", "Alemania", "Italia", "España", "Reino Unido"],
    américa: ["Estados Unidos", "México", "Brasil", "Argentina", "Canadá"],
    oceanía: ["Australia", "Nueva Zelanda", "Fiji", "Papúa Nueva Guinea", "Samoa"]
  };
  
  const continenteSeleccionado = prompt("Ingrese el nombre de un continente (Asia, África, Europa, América, Oceanía):").toLowerCase;

  if (continentes[continenteSeleccionado]) {
    console.log(`Cinco países de ${continenteSeleccionado}:`);
    continentes[continenteSeleccionado].forEach(pais => {
      console.log(pais);
    });
  } else {
    console.log("El continente ingresado no es válido o no está disponible.");
  }