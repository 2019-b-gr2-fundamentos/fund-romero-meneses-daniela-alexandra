function main() {
    var arregloEstudiantes = [
        { id: 1, nombre: "Daniela", nota: 10 },
        { id: 2, nombre: "Wendy", nota: 4 },
        { id: 3, nombre: "Carolina", nota: 9 },
        { id: 4, nombre: "Carlos", nota: 6.5 },
        { id: 5, nombre: "Alexandra", nota: 7 }
    ];
    //OPERADOR forEach 
    //Enviamos -> Nada
    // Recibimos -> Nada
    var respuestaForEach = arregloEstudiantes.forEach(function (valorActual, indice, arreglo) {
        console.log(valorActual.nota);
        valorActual.nota20 = valorActual.nota * 2;
    });
    console.log(respuestaForEach); // undefined
    //Map -> Transformar el arreglo (Mutar el arr)
    // ENVIAMOS -> valorActual modificado
    //RECIBIMOS -> Nuevo arreglo con valores modificados
    var respuestaMap = arregloEstudiantes.map(function (valorActual, i, arreglo) {
        var nuevoObjeto = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            nota20: valorActual.nota * 2
        };
        return nuevoObjeto;
    });
    console.log('Respuesta MAP', respuestaMap);
    console.log('Arreglo de Estudiantes', arregloEstudiantes);
    //Filter -> filtra el arreglo
    // ENVIAMOS -> Condicion
    //RECIBIMOS ->  Nuevop arreglo con valores filtrados
    var respuestaFilter = arregloEstudiantes
        .filter(function (valorActual, i, arreglo) {
        var condicion7 = valorActual.nota >= 7;
        var condicion5 = valorActual.nota < 5;
        //Condicion es un Truty
        return condicion7 || condicion5;
    });
    console.log('Respuesta Filter', respuestaFilter);
    console.log("Arreglo Estudiantes:", arregloEstudiantes);
    //AND & OR
    //AND ->  Every / todos cumplen
    //OR -> Some / algunos cumplen
    //Some-> devuelve True o False dependiendo de la condicion 
    // OJO: Si alguno cumple devuelve True
    // Si ninguno cumple devuelve False
    // ENVIAMOS -> Condicion
    //RECIBIMOS ->  Booleano
    var respuestaSome = arregloEstudiantes.some(function (valorActual, i, arr) {
        var condicion = valorActual.nota < 4;
        // CONDICION TRUTY O FALSY
        return condicion;
    });
    console.log("Respuesta Some", respuestaSome);
    console.log("Arreglo Estudiantes", arregloEstudiantes);
    //Every -> Devuelve True o False dependiendo de la condicion
    //         Si todos cumplen la condicion TRUE
    //         Si alguno no cumple la condicion FALSE
    // ENVIAMOS -> Condicion
    //RECIBIMOS ->  Booleano
    var respuestaEvery = arregloEstudiantes.every(function (valorActual, i, arr) {
        var condicion = valorActual.nota >= 9;
        return condicion;
    });
    console.log("Respuesta Every", respuestaEvery);
    console.log("Arreglo De Estudiantes", arregloEstudiantes);
    //REDUCE -> devuelve un valor
    //ENVIAMOS-> Calculo
    //RECIBIMOS-> Valor
    var respuestaReduce = arregloEstudiantes.reduce(function (acumulador, valorActual) {
        var calculo = acumulador + valorActual.nota;
        return calculo;
    }, 100 // Valor inicial acumulador
    );
    console.log("Respuesta Reduce", respuestaReduce);
    console.log("Promedio", respuestaReduce / arregloEstudiantes.length);
    console.log("Arreglo Estudiantes", arregloEstudiantes);
}
;
main();
