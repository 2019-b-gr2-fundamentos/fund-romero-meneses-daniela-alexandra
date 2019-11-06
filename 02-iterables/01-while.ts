//DO WHILE
let vecesQueHeComido = 0; // Cuando una variable no es constante en vez de utlizar const utilizamos let
do { 
    console.log("Vamos a comer")
    vecesQueHeComido = vecesQueHeComido + 1
    switch(vecesQueHeComido){
        case 1:
            console.log("Desayuno")
            break;
        case 2:
            console.log("Almuerzo")
            break;
        case 3:
            console.log("Merienda")
            break;
        default:
            console.log("Gordito")
            break;    
    }
} while(vecesQueHeComido < 3)


while(vecesQueHeComido < 4){
    vecesQueHeComido = 0;
    console.log("Vamos a Comer")
    vecesQueHeComido = vecesQueHeComido +1
    switch(vecesQueHeComido){
        case 1:
            console.log("Desayuno")
            break;
        case 2:
            console.log("Almuerzo")
            break;
        case 3:
            console.log("Merienda")
            break;
        default:
            console.log("Gordito")
            break;   
    }
}
/*
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
const impar = (2 * numero) +1;
const par = (2*numero);
const multiplosDe3 = impar * 3 && par * 3;

let analisis = 0;
let algebra = 0;
let compiladores = 0;
let programacion = 0;
let calculo = 0;
let fisica = 0;
let ingles = 0;

do{
    console.log("Deberes que hice")
    numero = numero +1
    switch(numero){
        case multiplosDe3:
            if(numero == multiplosDe3){
                compiladores = compiladores +1
                console.log("Hice ${compiladores} deberes de Compiladores");
            }
            break;
        case par:
            if(numero == par){
                algebra = algebra +1
                console.log("Hice ${algebra} deberes de Algebra")
            }
            break;
        case impar:
                if(numero == impar){
                    analisis = analisis +1
                    console.log("Hice ${analisis} deberes de Analisis") 
                }
        }
}while(numero < 50)