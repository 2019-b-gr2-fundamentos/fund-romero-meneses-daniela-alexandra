// En la mayor parte de lenguajes primero se define la funcion para que funcione cuando se la llame

function log(cualquierCosa){ // cualquierCosa => parametro
    console.log(cualquierCosa);
}
log("Hola Mundo");

function noHayTexto() {
    console.log("No hay Texto")
}
log(""); // Si se pueden crear funciones sin parametros, devuelven un espacio en blanco


function sumarDosNumeros(
    a: number, 
    b: number
    ): number{
    return a + b;
}
sumarDosNumeros(4, 2);
// Javasript es un lenguaje no tipado, es decir, no reconoce los tipos de valores
// Typescript es un lenguaje tipado
