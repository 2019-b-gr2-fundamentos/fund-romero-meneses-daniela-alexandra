/* 
CONTADOR DE DEBRES

1 Analisis de Compiladores 
2 Algebra
3 Compiladores
5 Programacion
7 Calculo 
11 Fisica
13 Ingles

si es impar -> aumentamos a analisis socioeconomico
si es par -> aumentamos a algebra
si es multiplo de tres -> aumentamos a compiladores
si es multiplo de cinco -> aumentamos a programacion
si es multiplo de siete -> aumentamos a calculo
si es multiplo de once -> aumentamos a fisica
si es multiplo de trece -> aumentamos a ingles
*/ 
let numero = 0;

let analisis = 0;
let algebra = 0;
let compiladores = 0;
let programacion = 0;
let calculo = 0;
let fisica = 0;
let ingles = 0;

do{
    numero = numero + 1;
   if(numero % 13 == 0){
       ingles = ingles + 1
   }else{
       if(numero % 11 == 0){
           fisica = fisica +1
       }else{
           if(numero % 7 == 0){
               calculo = calculo + 1
           }else{
               if(numero % 5 == 0){
                   programacion = programacion + 1
               }else{
                if(numero % 3 == 0){
                    compiladores = compiladores + 1;
                }else{
                    if(numero % 2 == 0){
                        algebra = algebra +1;
                    }else{   
                        analisis = analisis +1;
                    }
                }
               }
           }
       }
   }
}while(numero < 1000)

console.log("Deberes que hice")
console.log('Ingles', ingles)
console.log('Fisica', fisica)
console.log('Calculo', calculo)
console.log('Programacion', programacion)
console.log('Compiladores', compiladores)
console.log('Algebra', algebra)
console.log('Analisis', analisis)