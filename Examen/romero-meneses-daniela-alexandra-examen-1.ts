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
function volumenTrapezoide (baseme:number, baseMa:number, alturame:number, alturaMa:number): number{
    return ((1/2)*(baseme+baseMa)*alturame)*alturaMa
}

function main(){
    calculadora();
}
function calculadora() {
    const operacion: string = prompt('Selecciona una operacion: "suma-1", "resta-2", "multiplicacion-3", "division-4", "volumen trapezoide-5" ,"terminamos-6"')
    const esSuma: boolean = operacion == 'suma' || operacion == '1' || operacion == 'suma-1';
    const esResta: boolean = operacion =='resta'||operacion == '2' || operacion == 'resta-2';
    const esMultiplicacion: boolean = operacion == 'multiplicacion' || operacion == '3' || operacion == 'multiplicacion-3';
    const esDivision: boolean = operacion == 'division' || operacion == '4' ||operacion == 'division-4';
    const esVolumen: boolean = operacion == 'volumen trapezoide'|| operacion == '5'|| operacion == 'volumentrapezoide-5' || operacion== 'volumen trapezoide-5';
    const seTermino: boolean = operacion == 'terminamos' || operacion == '6' || operacion == 'terminamos-6';
    const estaValida: boolean = esSuma || esResta || esMultiplicacion || esDivision || esVolumen ;

    if(estaValida){
        if(esVolumen){
            const alturame:number = +prompt("Altura menor");
            const alturaMa:number = +prompt('Altura mayor');
            const baseme: number = +prompt('Base menor');
            const baseMa: number = +prompt('Base mayor');
            let resultado = 0;
            resultado = volumenTrapezoide( baseme, baseMa, alturame, alturaMa);
            console.log('resultado =', resultado)
        }else{
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
        }
    }else{
        if(seTermino){
            console.log("Terminamos :)") 
        }else{
            calculadora();
        }
    }
}
main()