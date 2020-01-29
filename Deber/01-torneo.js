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
var _04_opciones_1 = require("./04-opciones");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var contenidoArchivo, arregloCargadoDeArchivos, contador, minimoID, arregloToneos, arregloPreguntas, opciones, anadirTorneo, editarregistros, eliminarTorneo, buscarRegistro, salirDeLosRegistros, esValido, casos, _a, respuestaTorneoUno, nuevoRegistroUno, idABuscar_1, idEncontrado, opcionesDeEdicion, _b, nombreAEditar, lugarAEditar, campeonAEditar, finalistaAEditar, premioAEditar, organizadorAEditar, idABuscar2_1, idEncontrado2, buscarTorneo_1, torneoEncontrado, arregloTorneo;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
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
                                "premioEnDolares": 372.500, "organizador": "ATP" }
                        ];
                        console.log("Error de Parseo");
                    }
                    ;
                    contador = 3;
                    minimoID = -1;
                    arregloCargadoDeArchivos.forEach(function (valorActual) {
                        var idActual = valorActual.id;
                        if (valorActual > minimoID) {
                            minimoID = idActual;
                        }
                    });
                    minimoID = minimoID + 1;
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
                    opciones = prompts({
                        type: "number",
                        name: "opciones",
                        message: "Elija una opcion: \n1 para Añadir Torneo \n2 para Editar Torneos \n3 para Eliminar Torneos \n4 para Buscar Torneo \n5 para Salir\n"
                    });
                    anadirTorneo = opciones == "1";
                    editarregistros = opciones == "2";
                    eliminarTorneo = opciones == "3";
                    buscarRegistro = opciones == "4";
                    salirDeLosRegistros = opciones == "5";
                    esValido = anadirTorneo || editarregistros || eliminarTorneo || buscarRegistro || salirDeLosRegistros;
                    if (!esValido) return [3 /*break*/, 29];
                    casos = esValido;
                    _a = casos;
                    switch (_a) {
                        case anadirTorneo: return [3 /*break*/, 1];
                        case editarregistros: return [3 /*break*/, 3];
                        case eliminarTorneo: return [3 /*break*/, 22];
                        case buscarRegistro: return [3 /*break*/, 25];
                        case salirDeLosRegistros: return [3 /*break*/, 28];
                    }
                    return [3 /*break*/, 29];
                case 1: return [4 /*yield*/, prompts(arregloPreguntas)];
                case 2:
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
                    console.log("Torneos ingresados", contenidoArchivo);
                    return [3 /*break*/, 29];
                case 3:
                    console.log(arregloToneos);
                    return [4 /*yield*/, prompts({
                            type: "number",
                            name: "id",
                            message: "Ingresa el id del torneo a editar"
                        })];
                case 4:
                    idABuscar_1 = _c.sent();
                    idEncontrado = arregloToneos.findIndex(function (valorActual) {
                        return valorActual.id == idABuscar_1.id;
                    });
                    console.log("Indice Encontrado", idEncontrado);
                    console.log("\nQue deseas editar:\n", "1 Nombre\n", "2 Lugar\n", "3 Campeon\n", "4 Finalista\n", "5 Premio\n", "6 Organizador\n");
                    return [4 /*yield*/, _04_opciones_1.funcionOpcion()];
                case 5:
                    opcionesDeEdicion = _c.sent();
                    _b = opcionesDeEdicion;
                    switch (_b) {
                        case 1: return [3 /*break*/, 6];
                        case 2: return [3 /*break*/, 9];
                        case 3: return [3 /*break*/, 12];
                        case 4: return [3 /*break*/, 15];
                        case 5: return [3 /*break*/, 17];
                        case 6: return [3 /*break*/, 19];
                    }
                    return [3 /*break*/, 21];
                case 6: return [4 /*yield*/, prompts({
                        type: "text",
                        name: "nombre",
                        message: "Ingrese el nombre del torneo",
                    })];
                case 7:
                    nombreAEditar = _c.sent();
                    arregloToneos[idEncontrado].nombre = nombreAEditar.nombre;
                    console.log(arregloToneos);
                    return [4 /*yield*/, _04_opciones_1.funcionOpcion()];
                case 8:
                    _c.sent();
                    return [3 /*break*/, 21];
                case 9: return [4 /*yield*/, prompts({
                        type: "text",
                        name: "lugar",
                        message: "Ingresa el lugar del torneo"
                    })];
                case 10:
                    lugarAEditar = _c.sent();
                    arregloToneos[idEncontrado].lugar = lugarAEditar.lugar;
                    console.log(arregloToneos);
                    return [4 /*yield*/, _04_opciones_1.funcionOpcion()];
                case 11:
                    _c.sent();
                    return [3 /*break*/, 21];
                case 12: return [4 /*yield*/, prompts({
                        type: "text",
                        name: "campeon",
                        message: "Ingrese el nombre del campeon"
                    })];
                case 13:
                    campeonAEditar = _c.sent();
                    arregloToneos[idEncontrado].campeon = campeonAEditar.campeon;
                    console.log(arregloToneos);
                    return [4 /*yield*/, _04_opciones_1.funcionOpcion()];
                case 14:
                    _c.sent();
                    return [3 /*break*/, 21];
                case 15: return [4 /*yield*/, prompts({
                        type: "text",
                        name: "finalista",
                        message: "Ingrese nombre del finalista"
                    })];
                case 16:
                    finalistaAEditar = _c.sent();
                    arregloToneos[idEncontrado].finalista = finalistaAEditar.finalista;
                    console.log(arregloToneos);
                    return [3 /*break*/, 21];
                case 17: return [4 /*yield*/, prompts({
                        type: "number",
                        name: "premio",
                        message: "Ingrese valor del premio"
                    })];
                case 18:
                    premioAEditar = _c.sent();
                    arregloToneos[idEncontrado].premio = premioAEditar.premio;
                    console.log(arregloToneos);
                    return [3 /*break*/, 21];
                case 19: return [4 /*yield*/, prompts({
                        type: "text",
                        name: "organizador",
                        message: "Ingrese nombre del organizador"
                    })];
                case 20:
                    organizadorAEditar = _c.sent();
                    arregloToneos[idEncontrado].organizador = organizadorAEditar.organizador;
                    console.log(arregloToneos);
                    return [3 /*break*/, 21];
                case 21: return [3 /*break*/, 29];
                case 22: return [4 /*yield*/, prompts({
                        type: "number",
                        name: "id",
                        message: "Ingresa el id del torneo a eliminar"
                    })];
                case 23:
                    idABuscar2_1 = _c.sent();
                    idEncontrado2 = arregloToneos.findIndex(function (valorActual) {
                        return valorActual.id == idABuscar2_1.id;
                    });
                    console.log("Indice Encontrado", idEncontrado2);
                    arregloToneos.splice(1, idEncontrado2);
                    console.log("Torneos Ingresados", contenidoArchivo);
                    return [4 /*yield*/, _04_opciones_1.funcionOpcion()];
                case 24:
                    _c.sent();
                    return [3 /*break*/, 29];
                case 25: return [4 /*yield*/, prompts({
                        type: "number",
                        name: "id",
                        message: "Ingrese el ID del torneo a buscar"
                    })];
                case 26:
                    buscarTorneo_1 = _c.sent();
                    torneoEncontrado = arregloToneos
                        .find(// return CONDICION
                    function (valorActual) {
                        return valorActual.nombre == buscarTorneo_1.nombre;
                    });
                    console.log(torneoEncontrado);
                    return [4 /*yield*/, _04_opciones_1.funcionOpcion()];
                case 27:
                    _c.sent();
                    return [3 /*break*/, 29];
                case 28:
                    console.log("Se termino");
                    return [3 /*break*/, 29];
                case 29:
                    ;
                    arregloTorneo = JSON.stringify(arregloToneos);
                    console.log(arregloTorneo);
                    _03_escribir_torneo_1.escribirTorneos("./torneos.txt", arregloTorneo);
                    return [2 /*return*/];
            }
        });
    });
}
main();
