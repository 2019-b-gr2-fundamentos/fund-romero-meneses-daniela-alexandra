// Realizar un juego de tres en raya a base de matrices que permita a dos personas jugar
// El jugador debe ingresar el numero de casillero y se debe imprimir el tablero X para el casillero que esoja 
// el jugador 1 y O para el casillero que escoja el jugador 2
// Se debe verificar que el casillero que escoja la persona no haya sido antes ocupado por el otro jugador

//Pasos a seguir
// 1. Mostrar el tablero de juego a los jugadores
// 2. Pedir al jugador que escoja el casillero donde quiere ubicar la pieza
// 3. Comprobar que el lugar no este ocupado
// 4. Si el lugar no esta ocupado ubicar la pieza del jugador
// 5. Si el lugar esta ocupado pedirle que escoja otro lugar
// 6. Repetir la secuencia hasta que un jugador tenga tres fichas formando una columna, fila o diagonal, o hasta que se acaben los 
// espacios disponibles


function tableroJuego( tablero: any[] ){
    tablero = [ 1 , 2 , 3 , 
                4 , 5 , 6 ,
                7 , 8 , 9 ];

    console.log( tablero );
}
function jugadores ( jugador1: number, jugador2 : number ) {
    
    tableroJuego

    jugador1 = +prompt('Jugador 1, seleccione un casillero');
    if (jugador1 >= 0 && jugador1 <= 9){
        
    } 
    jugador2 = +prompt('Jugador 2, seleccione un casillero');
}
/*
function main() {
    jugadores
}

main;

*/