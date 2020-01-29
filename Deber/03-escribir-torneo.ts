import * as fs from 'fs'

export function escribirMatriz(path: string, contenido: string){
    fs.writeFyleSync(
        path, 
        contenido,
        'utf-8'
    );
}