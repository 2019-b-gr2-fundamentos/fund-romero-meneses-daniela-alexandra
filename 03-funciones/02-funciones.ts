function sumar(numUno:number, numDos:number): number{
    return numUno + numDos;
}
function restar(numUno:number, numDos:number): number{
    return numUno + numDos;
}
function multiplicar(numUno:number, numDos:number): number{
    return numUno + numDos;
}
function dividir(numUno:number, numDos:number): number{
    return numUno + numDos;
}

function main(){
    calculadora();
}
function calculadora() {
    const operacion: string = prompt('Selecciona una operacion: "suma-1", "resta-2", "multiplicacion-3", "division-4", "terminamos-5"')
    const esSuma: boolean = operacion == 'suma' || operacion == '1' || operacion == 'suma-1';
    const esResta: boolean = operacion =='resta'||operacion == '2' || operacion == 'resta-2';
    const esMultiplicacion: boolean = operacion == 'multiplicacion' || operacion == '3' || operacion == 'multiplicacion-3';
    const esDivision: boolean = operacion == 'division' || operacion == '4' ||operacion == 'division-4';
    const seTermino: boolean = operacion == 'terminamos' || operacion == '5' || operacion == 'terminamos-5';
    const estaValida: boolean = esSuma || esResta || esMultiplicacion || esDivision ;

    if(estaValida){
        const numUno: number = +prompt("Numero 1");
        const numDos: number = +prompt("Numero 2");
        let resultado = 0;
        if(esSuma){
            resultado = sumar(numUno, numDos);
        }
        if(esResta){
            resultado = restar(numUno, numDos);
        }
        if(esMultiplicacion){
            resultado = multiplicar(numUno, numDos);
        }
        if(esDivision){
            resultado = dividir(numUno, numDos);
        }
        console.log("resultado =", resultado);
    }else{
        if(seTermino){
            console.log("No eres tu soy yo") 
        }else{
            calculadora();
        }
    }
}
main()

/*
1)Seleccionar opercion
2.1) La seleccion no es VALIDA
    2.1.1) Vuelve a seleccionar la operacion
2.2)La seleccion es VALIDA
    2.2.1)Ingresar primer numero
    2.2.2)Seleccionar segundo numero
    2.2.3)Ejecutar la operacion
*/ 