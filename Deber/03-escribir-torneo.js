"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function escribirTorneos(path, contenido) {
    fs.writeFyleSync(path, contenido, 'utf8');
}
exports.escribirTorneos = escribirTorneos;
