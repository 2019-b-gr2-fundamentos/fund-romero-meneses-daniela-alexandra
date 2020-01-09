//NODE MODULES
// const sumaLibreria = require('04-librerias/suma');
// Importar todo el contenido con el nombre 'sumaLiberia' 
//del paquete '04-libreria/suma'
var sumaLibreria = require('04-librerias/lib/suma');
var restaLibreria = require('04-librerias/lib/resta');
var multiplicacionLibreria = require('04-librerias/lib/multiplicacion');
var divisionLibreria = require('04-librerias/lib/division');
var areaCuadradroLibreria = require('04-librerias/lib/area-cuadrado');
var areaRectanguloLibreria = require('04-librerias/lib/area-rectangulo');
var areaTrianguloLibreria = require('04-librerias/lib/area-triangulo');
var PI = require('04-librerias/lib/pi');
var respuesta = sumaLibreria(1, 2);
var respuestaResta = restaLibreria(1, 2);
var respuestaMultiplicacion = multiplicacionLibreria(2, 4);
var respuestaDivision = divisionLibreria(2, 4);
var respuestaAreaCuadrado = areaCuadradroLibreria(5);
var respuestaAreaRectangulo = areaRectanguloLibreria(5, 6);
var respuestaAreaTriangulo = areaTrianguloLibreria(5, 6);
console.log('la respuesta de la suma es', respuesta);
console.log('la respuesta de la resta es', respuestaResta);
console.log('la respuesta de la multiplicacion es', respuestaMultiplicacion);
console.log('la respuesta de la division es', respuestaDivision);
console.log('la respuesta del area del cuadrado es', respuestaAreaCuadrado);
console.log('la respuesta del area del rectangulo es', respuestaAreaRectangulo);
console.log('la respuesta del area del triangulo es', respuestaAreaTriangulo);
console.log('la constante PI es', PI);
