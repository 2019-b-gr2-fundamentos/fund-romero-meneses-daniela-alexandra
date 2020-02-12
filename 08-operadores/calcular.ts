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
