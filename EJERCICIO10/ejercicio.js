// 10. Cree un programa que almacene los documentos y nombres de diez usuarios, donde a
// cada documento corresponda su respectivo nombre. Imprima todos los nombres de los
// usuarios usando ciclos.

const usuarios = {
    "12345678": "Juan Pérez",
    "23456789": "Ana Gómez",
    "34567890": "Carlos Rodríguez",
    "45678901": "Marta Sánchez",
    "56789012": "Luis Fernández",
    "67890123": "Sara Díaz",
    "78901234": "Pedro Martínez",
    "89012345": "Laura García",
    "90123456": "David López",
    "01234567": "Carmen Ruiz",
  };
  
  console.log("Nombres de los usuarios:");
  for (const nombre in usuarios) {
    console.log(usuarios[nombre]);
  }