import { leerTorneos } from './02-leer-torneo'
import { escribirTorneos } from "./03-escribir-torneo"
import { Torneos } from "./interfaces/torneos.interface"
import * as prompts from 'prompts'
import { funcionOpcion } from './04-opciones'


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
            "premioEnDolares": 372.500, "organizador": "ATP" }
        ]
        console.log("Error de Parseo")
    };

    let contador = 3;

    let minimoID = -1;

    arregloCargadoDeArchivos.forEach(
        function(valorActual){
            const idActual = valorActual.id;
            if(valorActual > minimoID){
                minimoID = idActual;
            }
        }
    );
    minimoID = minimoID + 1;

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

    const opciones = prompts(
        {
            type: "number",
            name: "opciones",
            message: "Elija una opcion: \n1 para Añadir Torneo \n2 para Editar Torneos \n3 para Eliminar Torneos \n4 para Buscar Torneo \n5 para Salir\n"
        }

    );
    const anadirTorneo: boolean = opciones == "1";
    const editarregistros: boolean = opciones == "2";
    const eliminarTorneo: boolean = opciones == "3";
    const buscarRegistro: boolean = opciones== "4";
    const salirDeLosRegistros: boolean = opciones == "5";
    const esValido: boolean = anadirTorneo || editarregistros || eliminarTorneo || buscarRegistro || salirDeLosRegistros;

    if(esValido){
        const casos = esValido
        switch(casos){
            case anadirTorneo:
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

                    console.log("Torneos ingresados", contenidoArchivo)

                break;
                
            case editarregistros:
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

                const opcionesDeEdicion = await funcionOpcion();

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
                        await funcionOpcion();
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
                        await funcionOpcion();
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
                        await funcionOpcion();
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
                        break;
                }
                break;
            case eliminarTorneo: 
                const idABuscar2 = await prompts(
                    {
                        type: "number",
                        name: "id",
                        message: "Ingresa el id del torneo a eliminar"
                    }
                );
                const idEncontrado2 = arregloToneos.findIndex(
                    function(valorActual){
                        return valorActual.id == idABuscar2.id
                    }
                )
                console.log("Indice Encontrado", idEncontrado2);

                arregloToneos.splice(1, idEncontrado2);
                console.log("Torneos Ingresados", contenidoArchivo);
                await funcionOpcion();
                break;

            case buscarRegistro:
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
                        return valorActual.nombre == buscarTorneo.nombre;
                    }
                );
                console.log(torneoEncontrado);

                await funcionOpcion();
                break;

            case salirDeLosRegistros:
                console.log("Se termino")
                break;
            }
        };
    
    const arregloTorneo = JSON.stringify(arregloToneos);
    console.log(arregloTorneo);
    escribirTorneos(
        "./torneos.txt",
        arregloTorneo
    );

}

main();