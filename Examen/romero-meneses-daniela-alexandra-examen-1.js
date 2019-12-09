/*
PARTE 1
Añadir 6 operaciones extras a la calculadora que se hizo en clase
*/
function sumar(numUno, numDos) {
    return numUno + numDos;
}
function restar(numUno, numDos) {
    return numUno + numDos;
}
function multiplicar(numUno, numDos) {
    return numUno + numDos;
}
function dividir(numUno, numDos) {
    return numUno + numDos;
}
function volumenTrapezoide(baseme, baseMa, alturame, alturaMa) {
    return ((1 / 2) * (baseme + baseMa) * alturame) * alturaMa;
}
function volumenTetraedro(lado) {
    return ((lado * lado * Math.sqrt(2)) / 12);
}
function volumenEsfera(radio) {
    return ((4 / 3) * Math.PI * radio ^ 3);
}
function volumenCilindro(radio, altura) {
    return (Math.PI * radio ^ 2 * altura);
}
function volumenCono(radio, altura) {
    return (Math.PI * radio ^ 2 * altura) / 3;
}
function volumenPiramideTriangular(ladobase, altura) {
    return ((Math.sqrt(3) / 12) * ladobase * altura);
}
function main() {
    calculadora();
}
function calculadora() {
    var operacion = prompt('Selecciona una operacion: "suma-1", "resta-2", "multiplicacion-3", "division-4", "volumen-5" ,"terminamos-6"');
    var esSuma = operacion == 'suma' || operacion == '1' || operacion == 'suma-1';
    var esResta = operacion == 'resta' || operacion == '2' || operacion == 'resta-2';
    var esMultiplicacion = operacion == 'multiplicacion' || operacion == '3' || operacion == 'multiplicacion-3';
    var esDivision = operacion == 'division' || operacion == '4' || operacion == 'division-4';
    var esVolumen = operacion == 'volumen' || operacion == '5' || operacion == 'volumen-5';
    var seTermino = operacion == 'terminamos' || operacion == '6' || operacion == 'terminamos-6';
    var estaValida = esSuma || esResta || esMultiplicacion || esDivision || esVolumen;
    if (estaValida) {
        if (esVolumen) {
            var operacionDos = prompt('Selecciona un volumen: "trapezoide-1", "tetraedro-2","esfera-3", "cilindro-4", "cono-5", "piramide triangular-6", "terminamos-7"');
            var esTrapezoide = operacionDos == 'trapezoide' || operacionDos == 'trapezoide-1' || operacionDos == '1';
            var esTetraedro = operacionDos == 'tetraedro' || operacionDos == 'tetraedro-2' || operacionDos == '2';
            var esEsfera = operacionDos == 'esfera' || operacionDos == 'esfera-3' || operacionDos == '3';
            var esCilindro = operacionDos == 'cilindro' || operacionDos == 'cilindro-4' || operacionDos == '4';
            var esCono = operacionDos == 'cono' || operacionDos == 'cono-5' || operacionDos == '5';
            var esPiramide = operacionDos == 'piramide triangular' || operacionDos == 'piramide triangular-6' || operacionDos == '6' || operacionDos == 'piramide';
            var seTermino_1 = operacionDos == 'terminamos' || operacionDos == 'terminamos-7' || operacionDos == '7';
            var resultado = 0;
            if (esTrapezoide) {
                var alturame = +prompt("Altura menor");
                var alturaMa = +prompt('Altura mayor');
                var baseme = +prompt('Base menor');
                var baseMa = +prompt('Base mayor');
                resultado = volumenTrapezoide(baseme, baseMa, alturame, alturaMa);
            }
            if (esTetraedro) {
                var lado = +prompt('Valor del lado');
                resultado = volumenTetraedro(lado);
            }
            if (esEsfera) {
                var radio = +prompt('Valor del radio');
                resultado = volumenEsfera(radio);
            }
            if (esCilindro) {
                var radio = +prompt('Valor del radio');
                var altura = +prompt('valor de la altura');
                resultado = volumenCilindro(radio, altura);
            }
            if (esCono) {
                var radio = +prompt('Valor del radio');
                var altura = +prompt('Valor de la altura');
                resultado = volumenCono(radio, altura);
            }
            if (esPiramide) {
                var ladobase = +prompt('Valor del lado de la base');
                var altura = +prompt('Valor altura');
                resultado = volumenPiramideTriangular(ladobase, altura);
            }
            console.log('resultado =', resultado);
            if (seTermino_1) {
                console.log('Terminamos :)');
            }
            else {
                calculadora();
            }
        }
        else {
            var numUno = +prompt("Numero 1");
            var numDos = +prompt("Numero 2");
            var resultado = 0;
            if (esSuma) {
                resultado = sumar(numUno, numDos);
            }
            if (esResta) {
                resultado = restar(numUno, numDos);
            }
            if (esMultiplicacion) {
                resultado = multiplicar(numUno, numDos);
            }
            if (esDivision) {
                resultado = dividir(numUno, numDos);
            }
            console.log("resultado =", resultado);
        }
    }
    else {
        if (seTermino) {
            console.log("Terminamos :)");
        }
        else {
            calculadora();
        }
    }
}
main();
/*
PARTE 2
Crear, borrar, actualizar los elementos dentro de un arreglo
*/
function arreglo(elementos) {
    var torneos = prompt('Selecciones lo que quiere hacer: "añadir torneo-1", "Borrar Torneo-2","Actualizar-3", "terminamos-4"');
    var anadirTorneo = torneos == 'añadir torneo' || torneos == 'añadirtorneo' || torneos == 'añadir torneo-1' || torneos == '1';
    var borrarTorneo = torneos == 'borrar torneo' || torneos == 'borrartorneo' || torneos == 'borrar torneo-2' || torneos == '2';
    var actualizar = torneos == 'actualizar' || torneos == 'actualizar-3' || torneos == '3';
    var terminamos = torneos == 'terminamos' || torneos == 'terminamos-4' || torneos == '4';
    var esValido = anadirTorneo || borrarTorneo || actualizar;
    if (esValido) {
        var i = +prompt('Ingrese posicion:', ' la posicicon debe iniciar desde 1') - 1;
        if (anadirTorneo) {
            elementos.splice(i, 0, prompt('Nombre del torneo'));
            console.log(elementos);
            arreglo(elementos);
        }
        if (borrarTorneo) {
            elementos.splice(i, 1);
            console.log(elementos);
            arreglo(elementos);
        }
        if (actualizar) {
            var tipo = prompt("Seleccione que categoria: 'Men's Singles-1', 'Men's Doubles-2', 'Women's Singles-3', 'Women's Doubles-4', 'Mix Doubles-5' ");
            var menSingles = tipo == "Men's Singles" || tipo == "1" || tipo == "Men's Singles-1";
            var womenSingles = tipo == "Woman's Singles" || tipo == "Women's Singles-3" || tipo == '3';
            var menDoubles = tipo == "Men's Doubles" || tipo == "Men's Doubles-2" || tipo == '2';
            var womenDoubles = tipo == "Women's Doubles" || tipo == "Women's Doubles-4" || tipo == '4';
            var mixDoubles = tipo == "Mix Doubles" || tipo == 'Mix Doubles-5' || tipo == '5';
            switch (elementos[i]) {
                case 'shanghai masters':
                    console.log("Ronnie O'Sullivan");
                    arreglo(elementos);
                    break;
                case 'australia open':
                    if (menSingles) {
                        elementos[i] = 'Novak Djokovic';
                    }
                    if (womenSingles) {
                        elementos[i] = 'Naomi Osaka';
                    }
                    if (menDoubles) {
                        elementos[i] = 'Pierre-Hugues Herbert & Nicolas Mahut';
                    }
                    if (womenDoubles) {
                        elementos[i] = 'Samantha Stosur & Zhang Shuai';
                    }
                    if (mixDoubles) {
                        elementos[i] = 'Barbora Krejčíková & Rajeev Ram';
                    }
                    console.log(elementos);
                    arreglo(elementos);
                    break;
                case 'italian open':
                    if (menSingles) {
                        elementos[i] = 'Rafael Nadal';
                    }
                    if (womenSingles) {
                        elementos[i] = 'Karolina Pliskova';
                    }
                    if (menDoubles) {
                        elementos[i] = 'Juan Sebastián Cabal & Robert Farah';
                    }
                    if (womenDoubles) {
                        elementos[i] = 'Victoria Azarenka  & Ashleigh';
                    }
                    if (mixDoubles) {
                        elementos[i] = 'N/A';
                    }
                    console.log(elementos);
                    arreglo(elementos);
                    break;
                case 'madrid open':
                    if (menSingles) {
                        elementos[i] = 'Novak Djokovic';
                    }
                    if (womenSingles) {
                        elementos[i] = 'Kiki Bertens';
                    }
                    if (menDoubles) {
                        elementos[i] = 'Jean-Julien Rojer & Horia Tecau';
                    }
                    if (womenDoubles) {
                        elementos[i] = 'Hsieh Su-wei & Barbora Strýcová';
                    }
                    if (mixDoubles) {
                        elementos[i] = 'N/A';
                    }
                    console.log(elementos);
                    arreglo(elementos);
                case 'us open':
                    if (menSingles) {
                        elementos[i] = 'Rafael Nadal';
                    }
                    if (womenSingles) {
                        elementos[i] = 'Bianca Andreescu';
                    }
                    if (menDoubles) {
                        elementos[i] = 'Juan Sebastián Cabal & Robert Farah';
                    }
                    if (womenDoubles) {
                        elementos[i] = 'Elise Mertens and Aryna Sabalenka';
                    }
                    if (mixDoubles) {
                        elementos[i] = 'N/A';
                    }
                    console.log(elementos);
                    arreglo(elementos);
                    break;
                case 'wimbledon':
                    if (menSingles) {
                        elementos[i] = 'Novak Djokovic';
                    }
                    if (womenSingles) {
                        elementos[i] = 'Simona Halep';
                    }
                    if (menDoubles) {
                        elementos[i] = 'Juan Sebastián Cabal & Robert Farah';
                    }
                    if (womenDoubles) {
                        elementos[i] = 'Hsieh Su-wei & Barbora Strýcová';
                    }
                    if (mixDoubles) {
                        elementos[i] = 'Ivan Dodig & Latisha Chan';
                    }
                    console.log(elementos);
                    arreglo(elementos);
                    break;
            }
        }
    }
    else {
        if (terminamos) {
            console.log('Terminamos');
        }
        else {
            arreglo(elementos);
        }
    }
}
function main2() {
    arreglo([]);
}
main2();
