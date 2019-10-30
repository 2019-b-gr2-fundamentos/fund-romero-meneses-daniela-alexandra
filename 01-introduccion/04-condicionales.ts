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




//TRUTY & FALSY
if(0){
    console.log("Truty");
}else{
    console.log("Falsy");
}

//Un string vacío significa false
//Todas las letras y los numeros son truty excepto el cero, null, undefined

// Switch es una manera de escribir varios if y else, solo funciona con valores especificos

/*
const calculo = "sumar"; //sumar restar multiplicar dividir
switch(calculo) {
    case "sumar": //1
        //code 
        break ;
    case "restar": //2
        //code 
        break;
    case "multiplicar": //3
        //code 
        break;
    case "dividir": //4
        //code 
        break;
    default:
}
*/

// BREAK : detiene las comparaciones que se realizan en cada caso, se tiene iguales comparaciones que casos

//6 Guagua
//18 Guambra
//65 Longo
//66 Ruku
const edad = 30;
if( edad <=6 && edad >= 0 ){
    console.log("guagua");
}else{
    if(edad > 6 && edad <= 18){
        console.log("guambra");
    }else{
        if(edad > 18 && edad <= 65){
            console.log("longo");
        }else{
            if(edad > 65){
                console.log("ruku");
            }else{
                console.log("no aplica");
            }
        }
    }
}

