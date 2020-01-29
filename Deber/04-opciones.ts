
import * as fs from "fs"
import {numerosDeOpciones} from "./interfaces/opciones.interface"

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
    return opcionRespuesta.numeroDeOpcion;
}