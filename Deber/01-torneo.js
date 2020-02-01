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
var _03_escribir_torneo_1 = require("./03-escribir-torneo");
var prompts = require("prompts");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var contenidoArchivo, contador, arregloCargadoDeArchivos, minimoID, arregloToneos, arregloPreguntas, opcion, _a, respuestaTorneoUno, nuevoRegistroUno, arregloTextoTorneos, idABuscar_1, idEncontrado, opcionesDeEdicion, _b, nombreAEditar, arregloTextoTorneos_1, lugarAEditar, arregloTextoTorneos2, campeonAEditar, arregloTextoTorneos3, finalistaAEditar, arregloTextoTorneos4, premioAEditar, arregloTextoTorneos5, organizadorAEditar, arregloTextoTorneos6, idABuscar2_1, idEncontrado2, arregloTextoTorneos7, buscarTorneo_1, torneoEncontrado, arregloTextoTorneos8, arregloTextoTorneos9;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    contenidoArchivo = _02_leer_torneo_1.leerTorneos("./torneos.txt");
                    contador = 1;
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
                                "premioEnDolares": 372.500, "organizador": "ATP" }
                        ];
                        console.log("Error de Parseo");
                    }
                    ;
                    minimoID = -1;
                    arregloCargadoDeArchivos.forEach(function (valorActual) {
                        var idActual = valorActual.id;
                        if (idActual > minimoID) {
                            minimoID = idActual;
                        }
                    });
                    minimoID = minimoID + 1;
                    contador = minimoID;
                    arregloToneos = arregloCargadoDeArchivos;
                    arregloPreguntas = [
                        {
                            type: "text",
                            name: "nombre",
                            message: "Ingrese nombre de torneo"
                        },
                        {
                            type: "text",
                            name: "lugar",
                            message: "Ingrese ubicacion de torneo"
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
                    console.log("Elija la opcion que desea realizar, ingrese solo el numero:");
                    console.log("1:Agregar torneo");
                    console.log("2:Editar torneo");
                    console.log("3:Eliminar torneo");
                    console.log("4:Buscar buscar torneo");
                    console.log("5:Ver elementos del arreglo");
                    console.log("6:Salir");
                    return [4 /*yield*/, opcionfuncion()];
                case 1:
                    opcion = _c.sent();
                    _a = opcion;
                    switch (_a) {
                        case 1: return [3 /*break*/, 2];
                        case 2: return [3 /*break*/, 5];
                        case 3: return [3 /*break*/, 27];
                        case 4: return [3 /*break*/, 30];
                        case 5: return [3 /*break*/, 33];
                        case 6: return [3 /*break*/, 35];
                    }
                    return [3 /*break*/, 36];
                case 2: return [4 /*yield*/, prompts(arregloPreguntas)];
                case 3:
                    respuestaTorneoUno = _c.sent();
                    nuevoRegistroUno = {
                        id: contador,
                        nombre: respuestaTorneoUno.nombre,
                        lugar: respuestaTorneoUno.lugar,
                        campeon: respuestaTorneoUno.campeon,
                        finalista: respuestaTorneoUno.finalista,
                        premio: respuestaTorneoUno.premio,
                        organizador: respuestaTorneoUno.organizador
                    };
                    contador = contador + 1;
                    arregloToneos.push(nuevoRegistroUno);
                    console.log(arregloToneos);
                    arregloTextoTorneos = JSON.stringify(arregloToneos);
                    console.log(arregloTextoTorneos);
                    _03_escribir_torneo_1.escribirTorneos('./torneos.txt', arregloTextoTorneos);
                    return [4 /*yield*/, main()];
                case 4:
                    _c.sent();
                    return [3 /*break*/, 36];
                case 5:
                    console.log(arregloToneos);
                    return [4 /*yield*/, prompts({
                            type: "number",
                            name: "id",
                            message: "Ingresa el id del torneo a editar"
                        })];
                case 6:
                    idABuscar_1 = _c.sent();
                    idEncontrado = arregloToneos.findIndex(function (valorActual) {
                        return valorActual.id == idABuscar_1.id;
                    });
                    console.log("Indice Encontrado", idEncontrado);
                    console.log("\nQue deseas editar:\n", "1 Nombre\n", "2 Lugar\n", "3 Campeon\n", "4 Finalista\n", "5 Premio\n", "6 Organizador\n");
                    return [4 /*yield*/, opcionfuncion()];
                case 7:
                    opcionesDeEdicion = _c.sent();
                    _b = opcionesDeEdicion;
                    switch (_b) {
                        case 1: return [3 /*break*/, 8];
                        case 2: return [3 /*break*/, 11];
                        case 3: return [3 /*break*/, 14];
                        case 4: return [3 /*break*/, 17];
                        case 5: return [3 /*break*/, 20];
                        case 6: return [3 /*break*/, 23];
                    }
                    return [3 /*break*/, 26];
                case 8: return [4 /*yield*/, prompts({
                        type: "text",
                        name: "nombre",
                        message: "Ingrese el nombre del torneo",
                    })];
                case 9:
                    nombreAEditar = _c.sent();
                    arregloToneos[idEncontrado].nombre = nombreAEditar.nombre;
                    console.log(arregloToneos);
                    arregloTextoTorneos_1 = JSON.stringify(arregloToneos);
                    console.log(arregloTextoTorneos_1);
                    _03_escribir_torneo_1.escribirTorneos('./torneos.txt', arregloTextoTorneos_1);
                    return [4 /*yield*/, main()];
                case 10:
                    _c.sent();
                    return [3 /*break*/, 26];
                case 11: return [4 /*yield*/, prompts({
                        type: "text",
                        name: "lugar",
                        message: "Ingresa el lugar del torneo"
                    })];
                case 12:
                    lugarAEditar = _c.sent();
                    arregloToneos[idEncontrado].lugar = lugarAEditar.lugar;
                    console.log(arregloToneos);
                    arregloTextoTorneos2 = JSON.stringify(arregloToneos);
                    console.log(arregloTextoTorneos2);
                    _03_escribir_torneo_1.escribirTorneos('./torneos.txt', arregloTextoTorneos2);
                    return [4 /*yield*/, main()];
                case 13:
                    _c.sent();
                    return [3 /*break*/, 26];
                case 14: return [4 /*yield*/, prompts({
                        type: "text",
                        name: "campeon",
                        message: "Ingrese el nombre del campeon"
                    })];
                case 15:
                    campeonAEditar = _c.sent();
                    arregloToneos[idEncontrado].campeon = campeonAEditar.campeon;
                    console.log(arregloToneos);
                    arregloTextoTorneos3 = JSON.stringify(arregloToneos);
                    console.log(arregloTextoTorneos3);
                    _03_escribir_torneo_1.escribirTorneos('./torneos.txt', arregloTextoTorneos3);
                    return [4 /*yield*/, main()];
                case 16:
                    _c.sent();
                    return [3 /*break*/, 26];
                case 17: return [4 /*yield*/, prompts({
                        type: "text",
                        name: "finalista",
                        message: "Ingrese nombre del finalista"
                    })];
                case 18:
                    finalistaAEditar = _c.sent();
                    arregloToneos[idEncontrado].finalista = finalistaAEditar.finalista;
                    console.log(arregloToneos);
                    arregloTextoTorneos4 = JSON.stringify(arregloToneos);
                    console.log(arregloTextoTorneos4);
                    _03_escribir_torneo_1.escribirTorneos('./torneos.txt', arregloTextoTorneos4);
                    return [4 /*yield*/, main()];
                case 19:
                    _c.sent();
                    return [3 /*break*/, 26];
                case 20: return [4 /*yield*/, prompts({
                        type: "number",
                        name: "premio",
                        message: "Ingrese valor del premio"
                    })];
                case 21:
                    premioAEditar = _c.sent();
                    arregloToneos[idEncontrado].premio = premioAEditar.premio;
                    console.log(arregloToneos);
                    arregloTextoTorneos5 = JSON.stringify(arregloToneos);
                    console.log(arregloTextoTorneos5);
                    _03_escribir_torneo_1.escribirTorneos('./torneos.txt', arregloTextoTorneos5);
                    return [4 /*yield*/, main()];
                case 22:
                    _c.sent();
                    return [3 /*break*/, 26];
                case 23: return [4 /*yield*/, prompts({
                        type: "text",
                        name: "organizador",
                        message: "Ingrese nombre del organizador"
                    })];
                case 24:
                    organizadorAEditar = _c.sent();
                    arregloToneos[idEncontrado].organizador = organizadorAEditar.organizador;
                    console.log(arregloToneos);
                    arregloTextoTorneos6 = JSON.stringify(arregloToneos);
                    console.log(arregloTextoTorneos6);
                    _03_escribir_torneo_1.escribirTorneos('./torneos.txt', arregloTextoTorneos6);
                    return [4 /*yield*/, main()];
                case 25:
                    _c.sent();
                    return [3 /*break*/, 26];
                case 26:
                    ;
                    return [3 /*break*/, 36];
                case 27: return [4 /*yield*/, prompts({
                        type: "number",
                        name: "id",
                        message: "Ingresa el id del torneo a eliminar"
                    })];
                case 28:
                    idABuscar2_1 = _c.sent();
                    idEncontrado2 = arregloToneos.findIndex(function (valorActual, indice, arreglo) {
                        return valorActual.id == idABuscar2_1.id;
                    });
                    arregloToneos.splice(idEncontrado2, 1);
                    console.log("Torneos Ingresados", arregloToneos);
                    arregloTextoTorneos7 = JSON.stringify(arregloToneos);
                    console.log(arregloTextoTorneos7);
                    _03_escribir_torneo_1.escribirTorneos('./torneos.txt', arregloTextoTorneos7);
                    return [4 /*yield*/, main()];
                case 29:
                    _c.sent();
                    return [3 /*break*/, 36];
                case 30:
                    console.log(arregloToneos);
                    return [4 /*yield*/, prompts({
                            type: "number",
                            name: "id",
                            message: "Ingrese el ID del torneo a buscar"
                        })];
                case 31:
                    buscarTorneo_1 = _c.sent();
                    torneoEncontrado = arregloToneos
                        .find(// return CONDICION
                    function (valorActual) {
                        return valorActual.id == buscarTorneo_1.id;
                    });
                    console.log(torneoEncontrado);
                    arregloTextoTorneos8 = JSON.stringify(arregloToneos);
                    console.log(arregloTextoTorneos8);
                    _03_escribir_torneo_1.escribirTorneos('./torneos.txt', arregloTextoTorneos8);
                    return [4 /*yield*/, main()];
                case 32:
                    _c.sent();
                    return [3 /*break*/, 36];
                case 33:
                    console.log(arregloToneos);
                    arregloTextoTorneos9 = JSON.stringify(arregloToneos);
                    console.log(arregloTextoTorneos9);
                    _03_escribir_torneo_1.escribirTorneos('./torneos.txt', arregloTextoTorneos9);
                    return [4 /*yield*/, main()];
                case 34:
                    _c.sent();
                    return [3 /*break*/, 36];
                case 35:
                    console.log("Se termino\n");
                    return [3 /*break*/, 36];
                case 36:
                    ;
                    return [2 /*return*/];
            }
        });
    });
}
function opcionfuncion() {
    return __awaiter(this, void 0, void 0, function () {
        var opcion, opcionElegida;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    opcion = {
                        type: 'number',
                        name: 'numeros',
                        message: 'Elija una opcion',
                        validate: function (value) { return (value < 0 || value > 10 ? 'Escoger valor' : true); }
                    };
                    return [4 /*yield*/, prompts(opcion)];
                case 1:
                    opcionElegida = _a.sent();
                    return [2 /*return*/, opcionElegida.numeros];
            }
        });
    });
}
main().then().catch();
