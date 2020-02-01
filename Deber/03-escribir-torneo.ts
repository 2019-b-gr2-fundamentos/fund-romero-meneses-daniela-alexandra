import * as fs from 'fs'

export function escribirTorneos(
    path: string, 
    contenido: string){
    fs.writeFileSync(
        path, 
        contenido,
        'utf8'
    );
}