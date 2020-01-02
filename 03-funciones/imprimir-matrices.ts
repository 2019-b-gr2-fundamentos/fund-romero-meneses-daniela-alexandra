//Arreglo

function imprimirArreglo(arreglo: number[]){
    const tamaño = arreglo.length

 for (let vecesRepite = 0;
    vecesRepite < tamaño;
    vecesRepite++) {
        const posicion = arreglo [vecesRepite]
        console.log(posicion)
    }

}

function main (){ 
     const arreglos =
     [1,2,3,4,5,6,7,8,9,10]
     imprimirArreglo(arreglos)
 }

main();