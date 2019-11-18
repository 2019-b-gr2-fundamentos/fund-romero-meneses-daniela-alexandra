// for
/*
1) Declaramos una variable
2) Condicion (Expresion)
3) Incrementamos o disminuimos
*/
for(let numeroExDeMiCrush = 7; 
    numeroExDeMiCrush > 0; 
    numeroExDeMiCrush--){
    console.log("ES CAN DA LO!", numeroExDeMiCrush);
}
console.log("\n")
for(let numeroExDeMiCrush = 0; 
    numeroExDeMiCrush <= 6; 
    numeroExDeMiCrush++){
    console.log("ES CAN DA LO!", numeroExDeMiCrush);
}
console.log("\n")
for(let numeroExDeMiCrush = 0; 
    numeroExDeMiCrush < 7; 
    numeroExDeMiCrush++){
    console.log("ES CAN DA LO!", numeroExDeMiCrush);
}

//ARREGLOS
/*
1 Elemento (Variable const numero = 1)
Conjuntos del MISMO Elemento ( [1, 2, 3, 4, 5] )
Conjuntos de DIFERENTES Elementos ( [1, "abc", true] )
*/
const arregloNumeros = [1, 2, 3, 4, 5];
// Al utilizar LET permitimos que se reasignen valores 
arregloNumeros.push(6);
console.log("arreglo numeros", arregloNumeros);
arregloNumeros.pop();
console.log("arreglo numeros", arregloNumeros);

//A las variable mutables se les puede reasignar por lo que son menos utilizados 
//Push -> Añade un caracter al arreglo
// Pop -> Saca el ultimo carcater de un arreglo

/* 
ARREGLO
1) Elementos
2) Indices (0 index based) -> Posicion
3) Longitud -> # Elementos
*/
console.log(arregloNumeros.length);

//FOR
//1) let tamaño = arregloNumeros.lenght
// 2) tamaño > 0
// 3) ++

// Acceder a cada elemento del arreglo POR EL INDICE
const indiceElementoUno = 0;
arregloNumeros[indiceElementoUno]; // 1
arregloNumeros[0];//1
const indiceElementoCinco = 4;
arregloNumeros[indiceElementoCinco];
arregloNumeros[4];

//Acceder al elemneto cinco
// 1) INDICE
// [1, 2, 3, 4, 5]
//  0  1  2  3  4

// INDICE
console.log(arregloNumeros[indiceElementoCinco]);
//5
