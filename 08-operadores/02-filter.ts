export function calcular(funcion, numUno: number, numDos: number){
    return funcion(numUno, numDos)
}
export function sumar(numUno: number, numDos: number): number{
    return numUno + numDos
};
export function restar(numUno: number, numDos: number): number{
    return numUno - numDos
}
calcular(sumar, 1,2);
calcular(
    function(numUno, numDos, valorInicial){
        return numUno - numDos
    },
    5,
    3
);


export function filter(arreglo: any[],
    funcion: (
        valorActual: any, 
        indice?: number,
        arreglo?: any[]) => boolean) : any[]{
            const arregloFiltrado = [];
            for(let i = 0; i < arreglo.length; i++ ){
                const respuestaFuncion = funcion(
                    arreglo[i], // Valor actual
                    i, // Indice
                    arreglo, // Arreglo
                );
                if(respuestaFuncion == true){
                    arregloFiltrado.push(arreglo[i]);
                }
            }
        return arregloFiltrado;

}

