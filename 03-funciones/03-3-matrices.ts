function compararMatrices(
    matrizUno: number[][],
    matrizDos: number[][]
):boolean {
return true
}

const arregloMatriz = [
    [1,2],
    [3,4,5],
    [6,7,8],
    [9],
    1
]

function obtenerPrimeraDimension(matrizUno: number[][]):number | false{
    //VALIDACIONES
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    if(esValido){
        const primeraDimensionArreglo = matrizUno.length;
        return primeraDimensionArreglo;
    }else{
        return false;
    }
    
}
function obtenerSegundaDimension(matrizUno:number[][]): number | false{
    return 
}

function verificarTodosLosElementosDeUnArregloSonArreglo(
    arreglo: any[] 
    ){
        for(let i = 0; i< arreglo.length; i++){
            const elementoActual = arreglo[i];
            const esUnArreglo = typeof elementoActual == 'object' &&
            elementoActual.indexOf; //Truty
            if(!esUnArreglo){
                return false;
            }
        }
}


function main(){
    //compararMatrices()
}