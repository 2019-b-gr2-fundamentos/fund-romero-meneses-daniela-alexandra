// CONSTANTES UTILIZADAS PARA AMBAS CALCULADORAS

const numeroUno = 2;
const numeroDos = 5;
const q1 = 3;
const q2 = 2;
const r = 6;
const leyDeGauss = ((1/(4 * 3.1415 * 8.85 * 10E-12))*(q1 * q2)/(r * r));

// CALCULADORA CON IF Y ELSE

if(numeroUno + numeroDos){
    console.log(numeroUno + numeroDos)
 }else{
    if(numeroUno - numeroDos){
        console.log(numeroUno - numeroDos)
    }else{
        if(numeroUno * numeroDos){
            console.log(numeroUno * numeroDos)
        }else{
            if(numeroUno / numeroDos){
                console.log(numeroUno / numeroDos)
            }else{
                if(leyDeGauss){
                    console.log(leyDeGauss)
                }else{
                    console.log("ingrese valores a los numeros o ingrese tamaño/n", 
                    "de las cargas en conjunto con el radio")
                }
            }
        }
    }
}

//CALCULADORA CON SWITCH

const calculadora = "suma";
switch(calculadora){
    case "suma":
        console.log(numeroUno + numeroDos)
        break;
    case "resta":
        console.log(numeroUno - numeroDos)
        break;
    case "multiplicacion" :
        console.log(numeroUno * numeroDos)
        break;
    case "division" :
        console.log(numeroUno / numeroDos)
        break;
    case "Ley de Gauss":
        console.log((1/(4 * 3.1415 * 8.85 * 10E-12))*(q1 * q2)/(r * r));
        break;
    default:
        console.log("ingrese valores a los numeros o ingrese tamaño/n", 
        "de las cargas en conjunto con el radio")                
}

