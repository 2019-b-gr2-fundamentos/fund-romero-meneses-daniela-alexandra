"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function leerTorneos(path) {
    console.log('leer matriz');
    var resultado = fs.readFileSync(path, 'utf-8');
    return resultado;
}
exports.leerTorneos = leerTorneos;
