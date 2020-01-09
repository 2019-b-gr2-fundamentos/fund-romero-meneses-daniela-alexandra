//NODE MODULES
// const sumaLibreria = require('04-librerias/suma');
// Importar todo el contenido con el nombre 'sumaLiberia' 
//del paquete '04-libreria/suma'
import * as sumaLibreria from '04-librerias/lib/suma'
import * as restaLibreria from '04-librerias/lib/resta'
import * as multiplicacionLibreria from '04-librerias/lib/multiplicacion'
import * as divisionLibreria from '04-librerias/lib/division'
import * as areaCuadradroLibreria from '04-librerias/lib/area-cuadrado'
import * as areaRectanguloLibreria from '04-librerias/lib/area-rectangulo'
import * as areaTrianguloLibreria from '04-librerias/lib/area-triangulo'  
import * as PI from '04-librerias/lib/pi'

const respuesta = sumaLibreria(1,2);
const respuestaResta = restaLibreria(1,2);
const respuestaMultiplicacion = multiplicacionLibreria(2,4);
const respuestaDivision = divisionLibreria(2,4);
const respuestaAreaCuadrado = areaCuadradroLibreria(5);
const respuestaAreaRectangulo = areaRectanguloLibreria(5,6);
const respuestaAreaTriangulo = areaTrianguloLibreria(5,6);

console.log('la respuesta de la suma es', respuesta);
console.log('la respuesta de la resta es', respuestaResta);
console.log('la respuesta de la multiplicacion es', respuestaMultiplicacion);
console.log('la respuesta de la division es', respuestaDivision);
console.log('la respuesta del area del cuadrado es', respuestaAreaCuadrado);
console.log('la respuesta del area del rectangulo es', respuestaAreaRectangulo);
console.log('la respuesta del area del triangulo es', respuestaAreaTriangulo);
console.log('la constante PI es', PI);