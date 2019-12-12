//Escriba un programa que verifique si dos matrices son 
//iguales (La matriz es de dos dimensiones n * m)
// "n" y "m" pueden ser iguales o distintas.
/*
  n = 2, m = 3
  1 2 3  1 2 3
  4 5 6  4 5 6
 */
/*
1) Debe reconocer cuanto vale n y cuanto vale m
2) Compara m con n
3) Si m y n son iguales compara los elementos dentro de las matrices posicion
a posicion
*/
function igualdadMyN(matriz, matrizDos) {
    for (var i = 0; i < matriz.length || i < matrizDos.length[i]; i++) {
        var m = matriz.length[i] == matrizDos.length[i];
        var n = matriz.length == matrizDos.length;
        var myn = m && n;
        if (myn) {
            var tamaño = matriz.length[0][i];
            var tamañoDos = matrizDos[i][0];
            if (tamaño == tamañoDos) {
                console.log("Las matrices son iguales");
            }
            else {
                console.log("Las matrices tienen la misma dimension pero elementos diferentes por lo que no son iguales");
            }
        }
        else {
            console.log("Las matrices no tienen la misma dimension por lo que no son iguales");
        }
    }
}
function main() {
    var matriz = [[1, 2], [4, 5]];
    var matrizDos = [[2, 5], [3, 4]];
    igualdadMyN(matriz, matrizDos);
}
main();
