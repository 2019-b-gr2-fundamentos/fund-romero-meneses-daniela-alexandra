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
    if (arregloNumeros == [null]) {
        console.log("Ya no hay mas numeros");
    }
    else {
        for (var i = 0; i < arregloNumeros.length; i++) {
            console.log(arregloNumeros[i]);
        }
    }
}
function main2() {
    ElementosArrglo([1, 2, 3]);
}
main2();
