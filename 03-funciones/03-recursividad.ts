// RECURSIVIDAD
//En resursividad necesitamos una condición que detenga el llamado a la función
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