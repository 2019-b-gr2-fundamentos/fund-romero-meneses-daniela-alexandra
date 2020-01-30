import * as fs from 'fs'

export function escribirTorneos(path: string, contenido: string){
    fs.writeFyleSync(
        path, 
        contenido,
        'utf8'
    );
}