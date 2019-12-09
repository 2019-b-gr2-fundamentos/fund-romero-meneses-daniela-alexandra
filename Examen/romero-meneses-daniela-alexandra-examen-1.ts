/* 
PARTE 1
Añadir 6 operaciones extras a la calculadora que se hizo en clase
*/
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
function volumenTetraedro(lado:number):number{
    return ((lado*lado*Math.sqrt(2))/12)
}
function volumenEsfera(radio:number):number{
    return ((4/3)*Math.PI*radio^3)
}
function volumenCilindro(radio:number, altura:number):number {
    return (Math.PI * radio^2 * altura)
}
function volumenCono(radio:number, altura:number):number {
    return(Math.PI * radio^2 * altura)/3
}
function volumenPiramideTriangular(ladobase:number,altura:number):number{
    return ((Math.sqrt(3)/12)* ladobase * altura)
}
function main(){
    calculadora();
}
function calculadora() {
    const operacion: string = prompt('Selecciona una operacion: "suma-1", "resta-2", "multiplicacion-3", "division-4", "volumen-5" ,"terminamos-6"')
    const esSuma: boolean = operacion == 'suma' || operacion == '1' || operacion == 'suma-1';
    const esResta: boolean = operacion =='resta'||operacion == '2' || operacion == 'resta-2';
    const esMultiplicacion: boolean = operacion == 'multiplicacion' || operacion == '3' || operacion == 'multiplicacion-3';
    const esDivision: boolean = operacion == 'division' || operacion == '4' ||operacion == 'division-4';
    const esVolumen: boolean = operacion == 'volumen'|| operacion == '5'|| operacion == 'volumen-5';
    const seTermino: boolean = operacion == 'terminamos' || operacion == '6' || operacion == 'terminamos-6';
    const estaValida: boolean = esSuma || esResta || esMultiplicacion || esDivision || esVolumen ;

    if(estaValida){
        if(esVolumen){
            const operacionDos:string =prompt('Selecciona un volumen: "trapezoide-1", "tetraedro-2","esfera-3", "cilindro-4", "cono-5", "piramide triangular-6", "terminamos-7"')
            const esTrapezoide: boolean = operacionDos == 'trapezoide'|| operacionDos == 'trapezoide-1'|| operacionDos == '1';
            const esTetraedro:boolean = operacionDos == 'tetraedro'|| operacionDos == 'tetraedro-2' || operacionDos == '2';
            const esEsfera: boolean = operacionDos == 'esfera'|| operacionDos == 'esfera-3' || operacionDos == '3';
            const esCilindro: boolean = operacionDos == 'cilindro' || operacionDos == 'cilindro-4'|| operacionDos == '4';
            const esCono: boolean = operacionDos == 'cono'|| operacionDos == 'cono-5'|| operacionDos == '5';
            const esPiramide: boolean = operacionDos == 'piramide triangular'|| operacionDos == 'piramide triangular-6'|| operacionDos == '6' || operacionDos == 'piramide';
            const seTermino:boolean = operacionDos == 'terminamos'|| operacionDos == 'terminamos-7' || operacionDos == '7';
            let resultado = 0;
            if(esTrapezoide){
                const alturame:number = +prompt("Altura menor");
                const alturaMa:number = +prompt('Altura mayor');
                const baseme: number = +prompt('Base menor');
                const baseMa: number = +prompt('Base mayor');
                resultado = volumenTrapezoide( baseme, baseMa, alturame, alturaMa);
            }
            if(esTetraedro){
                const lado:number = +prompt('Valor del lado');
                resultado = volumenTetraedro(lado)
            }
            if(esEsfera){
                const radio:number = +prompt('Valor del radio');
                resultado = volumenEsfera(radio)
            }
            if(esCilindro){
                const radio:number = +prompt('Valor del radio');
                const altura:number = +prompt('valor de la altura');
                resultado = volumenCilindro(radio, altura)
            }
            if(esCono){
                const radio:number = +prompt('Valor del radio');
                const altura:number = +prompt('Valor de la altura');
                resultado = volumenCono(radio, altura)
            }
            if(esPiramide){
                const ladobase:number = +prompt('Valor del lado de la base');
                const altura:number = +prompt('Valor altura');
                resultado = volumenPiramideTriangular(ladobase, altura)
            }
            console.log('resultado =', resultado)
            
            if(seTermino){
                console.log('Terminamos :)')
            }else{
                calculadora();
            }

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
main();

/*
PARTE 2
Crear, borrar, actualizar los elementos dentro de un arreglo
*/

function arreglo(elementos:string[]):void {
    const torneos:string = prompt('Selecciones lo que quiere hacer: "añadir torneo-1", "Borrar Torneo-2","Actualizar-3", "terminamos-4"')
    const anadirTorneo: boolean = torneos == 'añadir torneo'|| torneos == 'añadirtorneo'|| torneos == 'añadir torneo-1'|| torneos == '1';
    const borrarTorneo : boolean = torneos == 'borrar torneo'|| torneos == 'borrartorneo'|| torneos == 'borrar torneo-2'|| torneos == '2';
    const actualizar:boolean = torneos== 'actualizar'|| torneos == 'actualizar-3' || torneos == '3';
    const terminamos: boolean = torneos == 'terminamos' || torneos == 'terminamos-4'|| torneos == '4';
    const esValido: boolean = anadirTorneo || borrarTorneo || actualizar;

    if(esValido){
        let i = +prompt('Ingrese posicion:',' la posicicon debe iniciar desde 1') - 1;
            if(anadirTorneo){
                elementos.splice(i,0,prompt('Nombre del torneo'));
                console.log(elementos);
                arreglo(elementos);
            }
            if(borrarTorneo){
                elementos.splice(i,1);
                console.log(elementos);
                arreglo(elementos);
            }
            if(actualizar){
                const tipo:string = prompt("Seleccione que categoria: 'Men's Singles-1', 'Men's Doubles-2', 'Women's Singles-3', 'Women's Doubles-4', 'Mix Doubles-5' ");
                const menSingles:boolean = tipo == "Men's Singles"|| tipo == "1" || tipo == "Men's Singles-1";
                const womenSingles = tipo == "Woman's Singles" || tipo == "Women's Singles-3" || tipo == '3';
                const menDoubles = tipo == "Men's Doubles" || tipo == "Men's Doubles-2" || tipo == '2';
                const womenDoubles = tipo == "Women's Doubles" || tipo == "Women's Doubles-4" || tipo == '4';
                const mixDoubles = tipo == "Mix Doubles" || tipo == 'Mix Doubles-5'|| tipo == '5';
                switch(elementos[i]){
                    case 'shanghai masters':
                        console.log("Ronnie O'Sullivan");
                        arreglo(elementos);
                    break
                    case 'australia open':
                        if(menSingles){
                            elementos[i] ='Novak Djokovic';
                        }
                        if(womenSingles){
                            elementos[i] = 'Naomi Osaka';
                        }
                        if(menDoubles){
                            elementos[i] = 'Pierre-Hugues Herbert & Nicolas Mahut';
                        }
                        if(womenDoubles){
                            elementos[i] = 'Samantha Stosur & Zhang Shuai'
                        }
                        if(mixDoubles){
                            elementos[i] = 'Barbora Krejčíková & Rajeev Ram'
                        }
                        console.log(elementos);
                        arreglo(elementos);
                    break
                    case 'italian open':
                        if(menSingles){
                            elementos[i] ='Rafael Nadal';
                        }
                        if(womenSingles){
                            elementos[i] = 'Karolina Pliskova';
                        }
                        if(menDoubles){
                            elementos[i] = 'Juan Sebastián Cabal & Robert Farah';
                        }
                        if(womenDoubles){
                            elementos[i] = 'Victoria Azarenka  & Ashleigh';
                        }
                        if(mixDoubles){
                            elementos[i] = 'N/A';
                        }
                        console.log(elementos);
                        arreglo(elementos);
                    break
                    case 'madrid open':
                        if(menSingles){
                            elementos[i] ='Novak Djokovic';
                        }
                        if(womenSingles){
                            elementos[i] = 'Kiki Bertens';
                        }
                        if(menDoubles){
                            elementos[i] = 'Jean-Julien Rojer & Horia Tecau';
                        }
                        if(womenDoubles){
                            elementos[i] = 'Hsieh Su-wei & Barbora Strýcová';
                        }
                        if(mixDoubles){
                            elementos[i] = 'N/A';
                        }
                        console.log(elementos);
                        arreglo(elementos);
                    case 'us open' :
                        if(menSingles){
                            elementos[i] ='Rafael Nadal';
                        }
                        if(womenSingles){
                            elementos[i] = 'Bianca Andreescu';
                        }
                        if(menDoubles){
                            elementos[i] = 'Juan Sebastián Cabal & Robert Farah';
                        }
                        if(womenDoubles){
                            elementos[i] = 'Elise Mertens and Aryna Sabalenka';
                        }
                        if(mixDoubles){
                            elementos[i] = 'N/A';
                        }
                        console.log(elementos);
                        arreglo(elementos);
                    break
                    case 'wimbledon':
                        if(menSingles){
                            elementos[i] ='Novak Djokovic';
                        }
                        if(womenSingles){
                            elementos[i] = 'Simona Halep';
                        }
                        if(menDoubles){
                            elementos[i] = 'Juan Sebastián Cabal & Robert Farah';
                        }
                        if(womenDoubles){
                            elementos[i] = 'Hsieh Su-wei & Barbora Strýcová';
                        }
                        if(mixDoubles){
                            elementos[i] = 'Ivan Dodig & Latisha Chan';
                        }
                        console.log(elementos);
                        arreglo(elementos);
                    break
                }
            }
    }else{
            if(terminamos){
                console.log('Terminamos');
            }else{
                arreglo(elementos)
        }
        
    }  
} 

function main2() {
    arreglo([])
}
main2()