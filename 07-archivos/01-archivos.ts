import { leerArchivo } from "./02-leer-archivo";
import { escribirArchivo } from "./03-escribir-archivos";
import { Estudiante } from "./interfaces/estudiante.interface";
import * as prompts from 'prompts';
async function main(){

    let contador = 1;

    const contenidoArchivo = leerArchivo('./ejemplo.txt');

    //PARSEAR -> TEXTO -> En
    /*
    {
        "nombre": "Adrian",     -> JSON
    }
    <universidad>
        <facultad></facultad>    -> XML
    </universidad>
    */

   let arregloCargadoDeArchivo;
    try{
       arregloCargadoDeArchivo= JSON
       .parse(contenidoArchivo);
   }catch(error){
       arregloCargadoDeArchivo = [];
       console.error('Error parseando archivo');
   }

    //OPERADORES
    let minimoId =-1;
    arregloCargadoDeArchivo
        .forEach( //NO SE ENVIA NADA Y NO SE DEVUELVE NADA
            //ITERAR
            function(valorActual){
                const idActual = valorActual.id;
                if(idActual > minimoId){
                    minimoId = idActual
                }
            }
        );
    minimoId = minimoId + 1;
    contador = minimoId

/*
   try{
       console.log('1');
       console.log('2');
       console.log('3');
       //Syntax Error Ej: ***
       Reference Error Ej: var a = b;
       let a = 1;
       let a = 2;  -> ESTA MAL!!
       let a = 3;
       console.log(123156413521354156416545212134568465146456451354545613165454135146548746514316546541654654654864765132153436455646486746987484646541321313546546546545121321213131312131321546874894512121021546879865454132132154649878746456465416345646);
       //throw new Error("EL ARCHIVO ESTA MAL PARSEADO");
       console.log('4');
       console.log('5');
   }catch(error){
       console.log(error);
       console.log(':3');
   }
*/
    console.log('contenidoArchivo', contenidoArchivo);
    
    const arregloEstudiantes: Estudiante[] = arregloCargadoDeArchivo;
    const arregloPreguntas = [
        { 
            type: 'text',
            name: 'nombre',
            message: 'Ingresa tu nombre'
        }
    ];
    const respuestaEstudianteUno = await prompts(arregloPreguntas);
    
    const nuevoRegistroUno = {
        id: contador,
        nombre: respuestaEstudianteUno.nombre
    };
    contador = contador + 1;
    arregloEstudiantes.push(nuevoRegistroUno);

    const respuestaEstudianteDos = await prompts(arregloPreguntas);
    
    const nuevoRegistroDos = {
        id: contador,
        nombre: respuestaEstudianteDos.nombre
    };
    contador = contador + 1;
    arregloEstudiantes.push(nuevoRegistroDos);
    
    console.log('Cual usuario quieres Editar?');
    console.log(arregloEstudiantes);

    // OPERADORES!!! -> REEMPLAZAR AL !FOR!

    const idABuscar = await prompts({
            type: 'number',
            name: 'id',
            message: 'Ingresa el ID del registro a Editar'
    })
    const indiceEncontrado = arregloEstudiantes.findIndex( // return CONDICION ->
        function (valorActual, indice, arreglo){
            return valorActual.id == idABuscar.id; // Nos devuelve el INDICE
        } // Si encuentra nos devuelve el indice
          // No encuentra
    )
    console.log('Indice encontrado:', indiceEncontrado);
    const nombreAEditar = await prompts({
        type: 'text',
        name: 'nombre',
        message: 'Ingresa el nuevo nombre'
    })
    arregloEstudiantes[indiceEncontrado].nombre = nombreAEditar.nombre;
    console.log(arregloEstudiantes);

    const buscar = await prompts({
        type: 'text',
        name: 'nombre',
        message: 'Buscar por ID o por NOMBRE'
    });
    const estudianteEncontrado = arregloEstudiantes
            .find( // return CONDICION
                function(valorActual){
                    return valorActual.nombre == buscar.nombre;
                }
            );

    console.log(estudianteEncontrado);

    const arregloTexto = JSON.stringify(arregloEstudiantes);
    // JSON.stringify -> Convierte objeto o arreglo en memoria a texto
    console.log(arregloTexto);
    escribirArchivo(
        './ejemplo.txt',
        arregloTexto
        );







    /*
    const textoLeido = leerArchivo('./ejemplo.txt');
    const nuevoContenido = 'TENGO HAMBRE :( \n';
    escribirArchivo('./ejemplo.txt', '');
    console.log(textoLeido + nuevoContenido);
    */
}

main().then().catch();