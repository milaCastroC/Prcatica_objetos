// 5. Dado el siguiente objeto { 183344: "habilitado", 354625: "habilitado", 6762442:
//     "inhabilitado", 88552: "inhabilitado", 438276: "habilitado" } recorrer el objeto y mostrar
//     cuántos usuarios están habilitados

const usuarios = { 183344: "habilitado", 354625: "habilitado", 6762442: "inhabilitado", 88552: "inhabilitado", 438276: "habilitado" };

let usuariosHabilitados = 0;
function contarUsuariosHabilitados(usuarios){
    for(let usuario in usuarios){
        const elemento = usuarios[usuario];
        if(elemento === "habilitado"){
            usuariosHabilitados ++ ;
        }
    }
    return usuariosHabilitados;
}

let numeroHabilitados = contarUsuariosHabilitados(usuarios);
console.log("El número de habilitados es: ", numeroHabilitados);
