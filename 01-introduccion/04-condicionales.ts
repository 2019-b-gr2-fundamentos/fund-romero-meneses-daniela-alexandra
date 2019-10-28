// Condicionales
/*
Un expresion devuelve booleanos, para utilizar else o if se deben
comparar con expresiones
!= -> significa "diferente"
== -> significa "igual"
&& -> significa "y"
*/
const casado = false;
if(casado == false) {
    console.log("No estoy casado");
} else {
    console.log("Si estoy casado");
}
if(casado != false) {
    console.log("Si estoy casado")
} else {
    console.log("No estoy casado")
}

const tengoMosa = false;
if(casado != false && tengoMosa != false){
    console.log("Casado y mosero")
} else {
    console.log("O casado o Mosero o Nada")
}

const CasadoYMosero = casado != false && tengoMosa != false;
if (CasadoYMosero == true){
    console.log("Casado y mosero")
} else {
    console.log("O casado o Mosero o Nada")
}

const estaCasado = true;
if(estaCasado == true){
    console.log("Si esta casado")
} else {
    console.log("No esta casado")
}

//AND -> &&
/*
TRUE Y TRUE = TRUE
TRUE Y FALSE = FALSE
FALSE Y TRUE = FALSE
FALSE Y FALSE = FALSE
*/

//OR -> || -> Pipes
/*
TRUE Y TRUE = TRUE
TRUE Y FALSE = TRUE
FALSE Y TRUE = TRUE
FALSE Y FALSE = FALSE
*/


// apago la primera alarma me hago bolita
//y lloro hasta la segunda alarma y me levanto 

//celularDescargado ==true
//celularDañado  == true
//amananeceMuerto == true
//estaActivadaLaAlarma  != true
//estaEnModoSilencio == true
//const seAtrasoAClase == celularDescargado == true || celularDañado  == true || amananeceMuerto == true || estaActivadaLaAlarma  != true || estaEnModoSilencio == true;
// if (seAtrasoAClase)