"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _02_leer_torneo_1 = require("./02-leer-torneo");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var contenidoArchivo, arregloCargadoDeArchivos, contador, minimoID, arregloToneos, arregloPreguntas;
        return __generator(this, function (_a) {
            contenidoArchivo = _02_leer_torneo_1.leerTorneos("./torneos.txt");
            console.log("Torneos ingresados", contenidoArchivo);
            try {
                arregloCargadoDeArchivos = JSON.parse(contenidoArchivo);
            }
            catch (error) {
                arregloCargadoDeArchivos = [
                    { "id": 1, "nombre": "Abierto de Catar", "campeon": "Elise Mertens", "finalista": "Simona Halep",
                        "premioEnDolares": 2517.250, "organizador": "WTA" },
                    { "id": 2, "nombre": "Doha", "campeon": "Roberto Bautista", "finalista": "Tomas Berdych",
                        "premioEnDolares": 1110.250, "organizador": "ATP" },
                    { "id": 3, "nombre": "Hobart International", "campeon": "Sofia Kenin", "finalista": "Anna Karolina Schmiedlova",
                        "premioEnDolares": 275.000, "organizador": "WTA" },
                    { "id": 4, "nombre": "Brisbane", "campeon": "Kei Nishikori", "finalista": "Daniil Medvedev",
                        "premioEnDolares": 372.500, "organizador": "ATP" },
                ];
                console.log("Error de Parseo");
            }
            ;
            contador = 3;
            minimoID = -1;
            arregloCargadoDeArchivos.foreach(function (valorActual) {
                var idActual = valorActual.id;
                if (valorActual > minimoID) {
                    minimoID = idActual;
                }
            });
            arregloToneos = arregloCargadoDeArchivos;
            arregloPreguntas = [
                {
                    type: "text",
                    name: "torneos",
                    message: "Ingrese nombre de torneo"
                },
                {
                    type: "text",
                    name: "campeon",
                    message: "Ingrese ganador del torneo"
                },
                {
                    type: "text",
                    name: "finalista",
                    message: "Ingresa nombre del finalista"
                },
                {
                    type: "number",
                    name: "premio",
                    message: "Ingresa el premio en dólares"
                },
                {
                    type: "text",
                    name: "organizador",
                    message: "Ingresa el organizador del torneo (ATP o WTA)"
                }
            ];
            console.log("Ingrese la opcion que quiere realizar\n", "1 Añadir torneo", "2 Eliminar torneo", "3 Buscar torneo", "4 Salir");
            return [2 /*return*/];
        });
    });
}
main();
