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

const respuesta = sumaLibreria(1,2);
console.log('la respuesta es', respuesta);