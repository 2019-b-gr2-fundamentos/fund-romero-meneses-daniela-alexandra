// RECURSIVIDAD
//En resursividad necesitamos una condición que detenga el llamado a la función
function imprimirNVeces(mensaje, numeroVeces) {
    if (numeroVeces == 0) {
        console.log("Se termino");
    }
    else {
        console.log(mensaje);
        var nuevoNumeroVeces = numeroVeces - 1;
        imprimirNVeces(mensaje, nuevoNumeroVeces);
    }
}
function main() {
    imprimirNVeces("hola", 1);
}
main();
function ElementosArrglo(arregloNumeros) {
    for (var i = 0; i < arregloNumeros.length; i++) {
        console.log(arregloNumeros[i]);
    }
    console.log("No hay mas numeros");
}
function main2() {
    ElementosArrglo([8, 5, 40]);
}
main2();
function ArregloInverso(arregloNumeros) {
    for (var i = arregloNumeros.length - 1; i < arregloNumeros.length && i >= 0; i--) {
        console.log(arregloNumeros[i]);
    }
    console.log("No hay mas numeros");
}
function main3() {
    ArregloInverso([9, 5, 8]);
}
main3();
/*
if(i = arregloNumeros.length){
            console.log("Ya no hay mas numeros");
        }
*/ 
