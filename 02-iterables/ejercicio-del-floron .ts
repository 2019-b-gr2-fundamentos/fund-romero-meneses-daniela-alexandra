/*
1) Crear arreglo 5 elementos
2) Cada elemento es 1 o 0
3) Exista al menos un elemento 1
Ej: [0, 0, 0, 0, 0] NO ES VALIDO
Ej: [0, 0, 0, 0, 1] ES VALIDO
*/
let floron = [];
floron.length = 5;
const jugadores = 2;

// Desarrollamos el juego del floron donde 1 significa que la persona tiene el floron y el 0 que no tiene

for(let elementos = 0; elementos < jugadores ; elementos ++ ){
    const quienTieneElFloron = (Math.floor(Math.random()*2));
    floron.push(quienTieneElFloron);
    console.log(quienTieneElFloron);
    if(floron = [0, 0]){
        console.log("[0, 1]")
        }
    for(let indice = 0; indice < jugadores; indice ++){
        let existeFloron = false;
        if(floron[indice] == 1){
            existeFloron = true;
        }
    }
}
