"use strict";
exports.__esModule = true;
// 02-crud.ts create read update delete
//const prompts = require('prompts');
var prompts = require("prompts");
function main() {
    obtenerDatosAnimalPerrito();
}
function obtenerDatosAnimalPerrito() {
    // Paradigma de programacion
    // SINCRONO VS ASINCRONO
    console.log('Inicio');
    var promesaEdad = prompts({
        type: 'number',
        name: 'edad',
        message: '¿Puedes darme tu edad?'
    });
    promesaEdad
        .then(//OK
    function (datos) {
        console.log('datos', datos); //AQUI PUEDO SEGUIR
        var promesaNombre = prompts({
            type: 'text',
            name: 'nombre',
            message: '¿Puedes darme tu nombre?'
        });
        promesaNombre
            .then(//OK
        function (datos) {
            console.log('Nombre', datos); //AQUI PUEDO SEGUIR
        })["catch"](// =(
        function (error) {
            console.log('Error', error);
        });
    })["catch"](// =(
    function (error) {
        console.log('Error', error);
    });
    console.log(promesaEdad);
    console.log('Fin');
}
main();
