

const parte1: any[] = [1, 2, 3];
const parte2: any[] = [4, 5, 6];
const parte3: any[] = [7, 8, 9];

console.log(parte1);
console.log(parte2);
console.log(parte3);

const jugadores1: string = prompt('Ingrese casillero');
const casillero1: boolean = jugadores1 == '1';
const casillero2: boolean = jugadores1 == '2';
const casillero3: boolean = jugadores1 == '3';
const podemosJugar: boolean = casillero1 || casillero2 || casillero3;

switch(podemosJugar){
    case casillero1:
        parte1.splice(0,1);

        parte1.splice(0,0,'X')

        console.log(parte1);
        console.log(parte2);
        console.log(parte3);
    break
}