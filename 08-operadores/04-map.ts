export function map(
    arregloOriginal: any[], // Reviso el original
    funcion: (
        valorActual: any,
        indice?: number,
        arreglo?: any[]) => any
        ): any[]{
            const arregloNuevo = [];
            const arreglo =[ ...arregloOriginal]; // Le hago un clon
            for(let i = 0; i < arreglo.length; i++){
                const clon = [...arreglo]; // Crear clon por iteracion
                const respuestaFuncion = funcion(
                    arreglo[i],
                    i,
                    clon, // Clon del clon para que juegue el programador
                );
                arregloNuevo.push(respuestaFuncion);
            }
            return arregloNuevo;
    }