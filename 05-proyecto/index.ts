//NODE MODULES
// const sumaLibreria = require('04-librerias/suma');
// Importar todo el contenido con el nombre 'sumaLiberia' 
//del paquete '04-libreria/suma'
import * as sumaLibreria from '04-librerias/suma'

const respuesta = sumaLibreria(1,2);
console.log('la respuesta es', respuesta);