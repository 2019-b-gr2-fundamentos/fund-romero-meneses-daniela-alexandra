import { leerTorneos } from './02-leer-torneo'
import { escribirTorneos } from "./03-escribir-torneo"
import { Torneos } from "./interfaces/torneos.interface"
import * as prompts from 'prompts'
import { numerosDeOpciones } from "./interfaces/opciones.interface"


async function main(){
    const contenidoArchivo = leerTorneos("./torneos.txt");
    console.log("Torneos ingresados", contenidoArchivo);

    let arregloCargadoDeArchivos;
    try{
        arregloCargadoDeArchivos = JSON.parse(contenidoArchivo);
    }catch(error){
        arregloCargadoDeArchivos = [
            {"id": 1,"nombre": "Abierto de Catar", "campeon": "Elise Mertens", "finalista": "Simona Halep",
            "premioEnDolares": 2517.250, "organizador": "WTA" },
            {"id": 2,"nombre": "Doha", "campeon": "Roberto Bautista", "finalista": "Tomas Berdych",
            "premioEnDolares": 1110.250, "organizador": "ATP" },
            {"id": 3,"nombre": "Hobart International", "campeon": "Sofia Kenin", "finalista": "Anna Karolina Schmiedlova",
            "premioEnDolares": 275.000, "organizador": "WTA" },
            {"id": 4,"nombre": "Brisbane", "campeon": "Kei Nishikori", "finalista": "Daniil Medvedev",
            "premioEnDolares": 372.500, "organizador": "ATP" },
        ]
        console.log("Error de Parseo")
    };

    let contador = 3;

    let minimoID = -1;

    arregloCargadoDeArchivos.foreach(
        function(valorActual){
            const idActual = valorActual.id;
            if(valorActual > minimoID){
                minimoID = idActual;
            }
        }
    );

    const arregloToneos: Torneos[] = arregloCargadoDeArchivos;
    const arregloPreguntas = [
        {
            type: "text",
            name: "torneos",
            message: "Ingrese nombre de torneo"
        },
        {
            type: "text",
            name: "campeon",
            message: "Ingrese ganador del torneo"
        },
        {
            type: "text",
            name: "finalista",
            message: "Ingresa nombre del finalista"
        },
        {
            type: "number",
            name: "premio",
            message: "Ingresa el premio en dólares"
        },
        {
            type: "text",
            name: "organizador",
            message: "Ingresa el organizador del torneo (ATP o WTA)"
        }
    ];


    console.log("Ingrese la opcion que quiere realizar\n", 
    "1 Añadir torneo", 
    "2 Eliminar torneo",
    "3 Buscar torneo",
    "4 Salir");
    const opciones = await functionOption();
    
    switch(opciones){
        case 1:
            break
    }


}

main();