import { leerArchivo } from "./02-leer-archivo"
import { escribirArchivo } from "./03-escribir-archivos";
import { Estudiante } from "./interfaces/estudiante.interface";
import * as prompts from "prompts";

async function main(){
    let contador = 0;
    const contenidoArchivo = leerArchivo(
        './ejemplo.txt'
    );
    console.log('Contenido Archivo', contenidoArchivo);
    const arregloCargadoDeArchivos = JSON.parse(contenidoArchivo);
    const arregloEstudiantes: Estudiante[] = arregloCargadoDeArchivos;
    const arregloPreguntas = [
        {
            type: 'text',
            name: 'nombre',
            message: 'Ingresa tu nombre'
        }
    ];
    const respuestaEstudianteUno = await prompts(arregloPreguntas);
    const nuevoResgistroUno = {
        id : contador,
        nombre: respuestaEstudianteUno.nombre
    };
    contador ++;
    arregloEstudiantes.push(nuevoResgistroUno);

    const respuestaEstudianteDos = await prompts(arregloPreguntas);
    const nuevoResgistroDos ={
        id: contador,
        nombre: respuestaEstudianteDos.nombre
    };
    contador ++;
    arregloEstudiantes.push(nuevoResgistroDos);

    console.log('¿Cual registro quieres editar?')
    console.log(arregloEstudiantes);

    const idABuscar = await prompts({
        type: 'number',
        name: 'id',
        message: 'Ingresa el ID del registro a Editar'
    })

//Operadores -> Reemplazar al FOR

    const indiceEncontrado = arregloEstudiantes.findIndex( //return CONDITION
        function(valorActual, indice, arreglo){
            return valorActual.id == idABuscar.id; //Nos devuelve el INDICE
        }// Si encuentra devuelve el indice
        //No encuentra
    )
    console.log('Indice Encontrado', indiceEncontrado)

    const nombreAEditar = await prompts ({
        type: 'text',
        name: 'nombre',
        message: 'Ingresa el nuevo nombre'
    })
    arregloEstudiantes[indiceEncontrado].nombre = nombreAEditar;
    console.log(arregloEstudiantes);

    const buscar = await prompts({
        type: 'text' || 'number',
        name: 'id' || 'nombre',
        message: 'Buscar por ID o por NOMBRE'
    });
    const estudianteEncontrado = arregloEstudiantes.find( // return condiction
        function(valorActual){
            return valorActual.nombre == buscar.nombre;
        }
    );
    console.log(estudianteEncontrado);

    /*
    const textoLeido = leerArchivo('./ejemplo.txt');
    const nuevoContenido = 'Tengo Hambre :( \n';
    escribirArchivo('./ejemplo.txt', '');
    console.log(textoLeido + nuevoContenido);
    */
}

main().then().catch();