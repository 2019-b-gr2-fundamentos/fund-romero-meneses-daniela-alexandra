import {numerosDeOpciones} from "./interfaces/opciones.interface"
import * as prompts from "prompts"

export async function funcionOpcion()
{
    const opcion = 
    {
        type:'number',
        name:'numeroDeOpcion',
        message:'¿Que desea realizar?',
        validate: value => (value < 0 || value > 5) ? `ESCOGER SOLO DE ENTRE LAS OPCIONES QUE APARECEN EN PANTALLA`:true
    }
    const opcionRespuesta:numerosDeOpciones = await prompts(opcion);
    return opcionRespuesta.numeros;
}