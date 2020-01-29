import {leerMatriz} from './02-leer-torneo'
import {escribirMatriz} from "./03-escribir-torneo"


async function main(){
    let contador = 0;
    const contenidoMatriz = leerMatriz('./matrizDeber.txt');
    console.log("Contenido", contenidoMatriz);
    
}

main();