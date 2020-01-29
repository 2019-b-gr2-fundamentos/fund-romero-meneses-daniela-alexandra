import { leerTorneos } from './02-leer-torneo'
import { escribirTorneos } from "./03-escribir-torneo"
import { Torneos } from "./interfaces/torneos.interface"
import * as prompts from 'prompts'


async function main(){
    let contador = 1;
    const contenidoArchivo = leerTorneos('./torneos.txt');
    
    let arregloCargadoDeArchivos;
    try{
        arregloCargadoDeArchivos = JSON.parse('./torneos.txt');
    }catch(error){
        arregloCargadoDeArchivos = [];
        console.error('Error parseando archivo');
    }

    let minimoId = -1;
    arregloCargadoDeArchivos.foreach(
        function(ValorActual){
            const idActual = ValorActual.id;
            if(idActual > minimoId){
                minimoId = idActual;
            }
        }
    );

    minimoId = minimoId + 1;
    contador = minimoId;

    console.log("Torneos", contenidoArchivo);

    const arregloTorneos: Torneos[] = arregloCargadoDeArchivos;
    const arregloPreguntas = [
        {
            type: 'text',
            name: 'nombre del torneo',
            message: 'Ingresa nombre del torneo'
        }
    ];
    const respuestaToneoUno = await prompts( arregloPreguntas );


    const nuevoResgistroUno = {
        id: contador,
        nombre: respuestaToneoUno.nombre,
    };

    contador = contador + 1;
    arregloTorneos.push(nuevoResgistroUno);

    
}

main();