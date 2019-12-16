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
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);

    let longitudactualMaxima = 0; //Auxiliar
    let longitudactualMinima = -1; //Auxiliar
    for(let i = 0; i < matrizUno.length; i++){
        const elementoActual = matrizUno[i]; // arreglo
        const longitudActual = elementoActual.length; // segunda dimension (m)
        if(longitudactualMaxima < longitudActual ){
            longitudactualMaxima = longitudActual;
        }
        if(longitudactualMinima == -1){
            longitudactualMinima = longitudActual;
        }else{
            if(longitudActual < longitudactualMinima){
                longitudactualMinima = longitudActual;
            }
        }
    }
    return false;
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