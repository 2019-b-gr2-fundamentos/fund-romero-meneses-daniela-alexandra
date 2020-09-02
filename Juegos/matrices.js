var prompt = require( 'prompt' )

prompt.start()

var parte1 = [1, 2, 3];
var parte2 = [4, 5, 6];
var parte3 = [7, 8, 9];
console.log(parte1);
console.log(parte2);
console.log(parte3);
var jugadores1 = prompt.get('Ingrese casillero');
var casillero1 = jugadores1 == '1';
var casillero2 = jugadores1 == '2';
var casillero3 = jugadores1 == '3';
var podemosJugar = casillero1 || casillero2 || casillero3;
if (podemosJugar) {
    if (casillero1) {
        parte1.splice(0, 1);
        parte1.splice(0, 0, 'X');
        console.log(parte1);
        console.log(parte2);
        console.log(parte3);
    }
}
