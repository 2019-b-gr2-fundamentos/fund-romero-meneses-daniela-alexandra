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
    var torneos = prompt('Selecciones lo que quiere hacer: "añadir torneo-1", "Borrar Torneo-2", "Actualizar-3", "terminamos-4"');
    var anadirTorneo = torneos == 'añadir torneo' || torneos == 'añadirtorneo' || torneos == 'añadir torneo-1' || torneos == '1';
    var borrarTorneo = torneos == 'borrar torneo' || torneos == 'borrartorneo' || torneos == 'borrar torneo-2' || torneos == '2';
    var actualizar = torneos == 'actualizar' || torneos == 'actualizar-3' || torneos == '3';
    var terminamos = torneos == 'terminamos' || torneos == 'terminamos-4' || torneos == '4';
    var esValido = anadirTorneo || borrarTorneo;
    if (esValido) {
        var i = +prompt('Ingrese posicion\n recuerde que el primer elemento se ubica en la posicion 0');
        if (anadirTorneo) {
            elementos.splice(i, 0, prompt('Nombre del torneo'));
            arreglo(elementos);
        }
        if (borrarTorneo) {
            elementos.splice(i, 1);
            arreglo(elementos);
        }
    }
    else {
        if (actualizar) {
            console.log(elementos);
            arreglo(elementos);
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
}
function main2() {
    arreglo([]);
}
main2();
