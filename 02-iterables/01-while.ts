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

while(vecesQueHeComido < 3){
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