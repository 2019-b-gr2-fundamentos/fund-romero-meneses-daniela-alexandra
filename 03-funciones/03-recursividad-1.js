// RECURSIVIDAD
//En resursividad necesitamos una condición que detenga el llamado a la función
/*
function imprimirNVeces(mensaje : string, numeroVeces : number): void{
    if(numeroVeces == 0){
        console.log("Se termino")
    }else{
        console.log(mensaje);
         const nuevoNumeroVeces = numeroVeces - 1;
        imprimirNVeces(mensaje, nuevoNumeroVeces);
    }
}
function main(){
    imprimirNVeces("hola", 1);
}
main();

function ElementosArrglo(arregloNumeros: number[]){
    for(let i = 0; i < arregloNumeros.length; i++ ){
          console.log(arregloNumeros[i]);
    }
    console.log("No hay mas numeros")
}
function main2(){
    ElementosArrglo([8, 5, 40]);
}
main2();

function ArregloInverso(arregloNumeros: number[]){
    for(let i = arregloNumeros.length - 1; i < arregloNumeros.length && i >= 0; i--){
        console.log(arregloNumeros[i]);
    }
    console.log("No hay mas numeros");
}

function main3(){
    ArregloInverso([ 9, 5, 8]);
}
main3();
*/
var arregloDosDimensiones = [
    [1, 2, 3, 4],
    [3, 4, 5, 6]
];
console.log(arregloDosDimensiones.length[0]);
/*
arregloDosDimensiones[0][0] //primer arreglo, primer elemento
arregloDosDimensiones[0][1] //primer arreglo, segundo elemento
arregloDosDimensiones[1][0] //segundo arreglo, primer elemento
arregloDosDimensiones[1][1] //segundo arreglo, segundo elemento
arregloDosDimensiones.length // devuelve 2 el # de vectores
arregloDosDimensiones[0] // devuelve [1,2,3,4] -> el primer vector
arregloDosDimensiones.length[0] //  devuelve 4 la cantidad de elementos del arreglo
*/
var unaDimension = [];
//return[0,0,1*4-2*3]
// multiplicar 0*n elemento +
// multiplicar 0+1*n-1 elemento +
// multiplicar 0 +2*n -2 elemento +
/*
    1) definimos el tamaño del arreglo
    2) Repetir el calculo n veces
    3.1) Accedemos al primer elemento del primer arreglo
    3.2) Accedemos al ultimo elemento del ultimo arreglo
    3.3) Sumamos los elementos

    3.4) 1er elemento + 1 = 2do elemento 1er arreglo
    3.5) ultimo elemento -1 = penultimo elemento del 2do arreglo
    3.5) sumar los elementos
*/
/*
function productoCruz(vectores: number[][]): number[]{
    let suma = 0;
    const vectorTamaño = vectores.length[1];
    for(let i = 0; i < vectorTamaño; i++){
        const indice2 = vectores.length[1] - i - 1;
        let Num = vectores[0][i];
        let NumDos = vectores[1][indice2];
        let parcial = Num * NumDos;
        suma = suma + parcial;
        console.log(Num);
        console.log(NumDos);
    }
    console.log(`${[0,0,suma]}`);
    return [0,0, suma]
}

function main4(){
    productoCruz([[1,2,3,4],[4,5,6,7]]);
}
main4();
*/
