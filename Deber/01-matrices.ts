import {leerMatriz} from './02-leer-matriz'
import {escribirMatriz} from "./03-escribir-matriz"


async function main(){
    let contador = 0;
    const contenidoMatriz = leerMatriz('./matrizDeber.txt');
    console.log("Contenido", contenidoMatriz);
    
}

main();