import * as fs from 'fs'

export function leerMatriz(path: string): string{
    console.log('leer matriz');
    const resultado = fs.readFileSync(
        path,
        'utf-8'
    );
    return resultado
}