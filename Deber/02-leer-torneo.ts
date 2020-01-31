import * as fs from 'fs'

export function leerTorneos(path: string): string{
    const resultado = fs.readFileSync(
        path,
        'utf-8'
    );
    return resultado
}