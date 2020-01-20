// 02-crud.ts create read update delete
//const prompts = require('prompts');
import * as prompts from 'prompts'
import {RespuestaEdad} from './interfaces/respuesta-edad.interface'
import {RespuestaNombre} from './interfaces/respuesta-nombre.interface'

function main(){

    // obtenerDatosAnimalPerrito(); //Asincrona
    obtenerDatosAnimalPerritoSincrono()
    .then()
    .catch() //Promesa // Sincrona

}

function obtenerDatosAnimalPerrito(){
    // Paradigma de programacion
    // SINCRONO VS ASINCRONO
    console.log('Inicio');
    const promesaEdad = prompts({ //PROMESA
        type: 'number',
        name: 'edad',
        message: '¿Puedes darme tu edad?'
    });
    promesaEdad
        .then( //OK
            (datos) => {
                console.log('datos',datos); //AQUI PUEDO SEGUIR
                    const promesaNombre = prompts({ //PROMESA
                        type: 'text',
                        name: 'nombre',
                        message: '¿Puedes darme tu nombre?'
                    });
                    promesaNombre
                        .then( //OK
                            (datos) => {
                                console.log('Nombre',datos); //AQUI PUEDO SEGUIR
                            }
                        )
                        .catch( // =(
                            (error) => {
                                console.log('Error', error);
                            }
                        );

            }
        )
        .catch( // =(
            (error) => {
                console.log('Error', error);
            }
        );

    console.log(promesaEdad);
    console.log('Fin');
}

async function obtenerDatosAnimalPerritoSincrono(){
    // Paradigma de programacion
    // SINCRONO VS ASINCRONO
    console.log('Inicio');
    const preguntas = [
        {
            type: 'number',
            name: 'edad',
            message: '¿Puedes darme tu edad?'
        },
        {
            type: 'text',
            name: 'nombre',
            message: '¿Puedes darme tu nombre?' 
        },
        {
            type: 'text',
            name: 'cedula',
            message: '¿Puedes darme tu cedula?'
        }
    ]
    const respuestas: RespuestaEdad = await prompts(preguntas);
    console.log('Respuestas:', respuestas);
    console.log('Fin');
}

main();