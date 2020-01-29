import * as fs from 'fs'

export function leerTorneos(path: string): string{
    console.log('leer matriz');
    const resultado = fs.readFileSync(
        path,
        'utf-8'
    );
    return resultado
}