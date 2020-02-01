import { leerTorneos } from './02-leer-torneo'
import { escribirTorneos } from "./03-escribir-torneo"
import { Torneos } from "./interfaces/torneos.interface"
import * as prompts from 'prompts'
import { numerosDeOpciones } from "./interfaces/opciones.interface"


async function main(){
    const contenidoArchivo = leerTorneos("./torneos.txt");
    let contador = 1;

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
            "premioEnDolares": 372.500, "organizador": "ATP" }
        ]
        console.log("Error de Parseo")
    };

    
    let minimoID = -1;

    arregloCargadoDeArchivos.forEach(
        function(valorActual){
            const idActual = valorActual.id;
            if(idActual > minimoID){
                minimoID = idActual;
            }
        }
    );
    minimoID = minimoID + 1;
    contador = minimoID;

    const arregloToneos: Torneos[] = arregloCargadoDeArchivos;
    const arregloPreguntas = [
        {
            type: "text",
            name: "nombre",
            message: "Ingrese nombre de torneo"
        },
        {
            type: "text",
            name: "lugar",
            message: "Ingrese ubicacion de torneo"
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

    console.log("Elija la opcion que desea realizar, ingrese solo el numero:")
    console.log("1:Agregar torneo")
    console.log("2:Editar torneo")
    console.log("3:Eliminar torneo")
    console.log("4:Buscar buscar torneo")
    console.log("5:Ver elementos del arreglo")
    console.log("6:Salir")

    const opcion = await opcionfuncion();
        
        switch(opcion){
            case 1:
                const respuestaTorneoUno = await prompts(arregloPreguntas);
                const nuevoRegistroUno = {
                    id: contador,
                    nombre: respuestaTorneoUno.nombre,
                    lugar: respuestaTorneoUno.lugar,
                    campeon: respuestaTorneoUno.campeon,
                    finalista: respuestaTorneoUno.finalista,
                    premio: respuestaTorneoUno.premio,
                    organizador: respuestaTorneoUno.organizador
                    };

                    contador = contador + 1;
                    arregloToneos.push(nuevoRegistroUno);

                    console.log(arregloToneos);
                    const arregloTextoTorneos = JSON.stringify(arregloToneos);
                        console.log(arregloTextoTorneos);
                        escribirTorneos(
                            './torneos.txt',
                            arregloTextoTorneos
                        );
                    await main();

                break;
                
            case 2:
                console.log(arregloToneos);

                const idABuscar = await prompts(
                    {
                        type: "number",
                        name: "id",
                        message: "Ingresa el id del torneo a editar"
                    }
                );
                const idEncontrado = arregloToneos.findIndex(
                    function(valorActual){
                        return valorActual.id == idABuscar.id
                    }
                )
                console.log("Indice Encontrado", idEncontrado);
                
                console.log("\nQue deseas editar:\n", 
                "1 Nombre\n",
                "2 Lugar\n",
                "3 Campeon\n",
                "4 Finalista\n",
                "5 Premio\n",
                "6 Organizador\n");

                const opcionesDeEdicion = await opcionfuncion();

                switch(opcionesDeEdicion){
                    case 1: 
                        const nombreAEditar = await prompts(
                            {
                                type: "text",
                                name: "nombre",
                                message: "Ingrese el nombre del torneo",
                            }
                        )
                        arregloToneos[idEncontrado].nombre = nombreAEditar.nombre;
                    
                        console.log(arregloToneos);

                        const arregloTextoTorneos = JSON.stringify(arregloToneos);
                        console.log(arregloTextoTorneos);
                        escribirTorneos(
                            './torneos.txt',
                            arregloTextoTorneos
                        );

                        await main();
                        break;
                    case 2:
                        const lugarAEditar = await prompts(
                            {
                                type: "text",
                                name: "lugar",
                                message: "Ingresa el lugar del torneo"
                            }
                        )
                        arregloToneos[idEncontrado].lugar = lugarAEditar.lugar

                        console.log(arregloToneos);

                        const arregloTextoTorneos2 = JSON.stringify(arregloToneos);
                        console.log(arregloTextoTorneos2);
                        escribirTorneos(
                            './torneos.txt',
                            arregloTextoTorneos2
                        );
                        await main();
                        break;
                    case 3:
                        const campeonAEditar = await prompts(
                            {
                                type: "text",
                                name: "campeon",
                                message: "Ingrese el nombre del campeon"
                            }
                        )
                        arregloToneos[idEncontrado].campeon = campeonAEditar.campeon

                        console.log(arregloToneos);
                        const arregloTextoTorneos3 = JSON.stringify(arregloToneos);
                        console.log(arregloTextoTorneos3);
                        escribirTorneos(
                            './torneos.txt',
                            arregloTextoTorneos3
                        );
                        await main();
                        break;
                    case 4: 
                        const finalistaAEditar = await prompts(
                            {
                                type: "text",
                                name: "finalista",
                                message: "Ingrese nombre del finalista"
                            }
                        )
                        arregloToneos[idEncontrado].finalista = finalistaAEditar.finalista

                            console.log(arregloToneos);
                            const arregloTextoTorneos4 = JSON.stringify(arregloToneos);
                        console.log(arregloTextoTorneos4);
                        escribirTorneos(
                            './torneos.txt',
                            arregloTextoTorneos4
                        );
                            await main();
                            break;
                    case 5:
                        const premioAEditar = await prompts(
                            {
                                type: "number",
                                name: "premio",
                                message: "Ingrese valor del premio"
                            }
                        )
                        arregloToneos[idEncontrado].premio = premioAEditar.premio

                        console.log(arregloToneos);
                        const arregloTextoTorneos5 = JSON.stringify(arregloToneos);
                        console.log(arregloTextoTorneos5);
                        escribirTorneos(
                            './torneos.txt',
                            arregloTextoTorneos5
                        );
                        await main();
                        break;
                    case 6:
                        const organizadorAEditar = await prompts(
                            {
                                type: "text",
                                name: "organizador",
                                message: "Ingrese nombre del organizador"
                            }
                        ) 
                        arregloToneos[idEncontrado].organizador = organizadorAEditar.organizador

                        console.log(arregloToneos)
                        const arregloTextoTorneos6 = JSON.stringify(arregloToneos);
                        console.log(arregloTextoTorneos6);
                        escribirTorneos(
                            './torneos.txt',
                            arregloTextoTorneos6
                        );
                        await main();
                        break;
                };
                break;
            case 3: 
                const idABuscar2 = await prompts(
                    {
                        type: "number",
                        name: "id",
                        message: "Ingresa el id del torneo a eliminar"
                    }
                );
                const idEncontrado2 = arregloToneos.findIndex(
                    function(valorActual, indice, arreglo){
                        return valorActual.id == idABuscar2.id
                    }
                )

                arregloToneos.splice(idEncontrado2, 1);
                console.log("Torneos Ingresados", arregloToneos);
                const arregloTextoTorneos7 = JSON.stringify(arregloToneos);
                        console.log(arregloTextoTorneos7);
                        escribirTorneos(
                            './torneos.txt',
                            arregloTextoTorneos7
                        );
                await main();
                break;

            case 4:
                console.log(arregloToneos);

                const buscarTorneo = await prompts(
                    {
                        type: "number",
                        name: "id",
                        message: "Ingrese el ID del torneo a buscar"
                    }
                )
                const torneoEncontrado = arregloToneos
                .find( // return CONDICION
                    function(valorActual){
                        return valorActual.id == buscarTorneo.id;
                    }
                );
                console.log(torneoEncontrado);
                const arregloTextoTorneos8 = JSON.stringify(arregloToneos);
                        console.log(arregloTextoTorneos8);
                        escribirTorneos(
                            './torneos.txt',
                            arregloTextoTorneos8
                        );
                await main();
                break;
        
            case 5:
                console.log(arregloToneos);
                const arregloTextoTorneos9 = JSON.stringify(arregloToneos);
                        console.log(arregloTextoTorneos9);
                        escribirTorneos(
                            './torneos.txt',
                            arregloTextoTorneos9
                        );
                await main();
                break;

            case 6:
                console.log("Se termino\n");
                break;
            };

}

async function opcionfuncion(){
    const opcion =
    {
        type:'number',
        name:'numeros',
        message: 'Elija una opcion',
        validate: value => (value < 0 || value > 10 ? 'Escoger valor':true)
    }

    const opcionElegida:numerosDeOpciones = await prompts(opcion);
    return opcionElegida.numeros;
}
main().then().catch();