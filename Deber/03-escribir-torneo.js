"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function escribirTorneos(path, contenido) {
    fs.writeFileSync(path, contenido, 'utf8');
}
exports.escribirTorneos = escribirTorneos;
