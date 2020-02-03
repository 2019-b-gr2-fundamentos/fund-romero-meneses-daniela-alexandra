var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function main() {
    var uno = 1;
    var dos = uno; //Asignacion al valor de una variable
    var tres = dos; //Asignacion al valor de una variable
    console.log("uno", uno);
    console.log("dos", dos);
    console.log('tres', tres);
    uno = 5;
    console.log("uno", uno);
    console.log("dos", dos);
    console.log('tres', tres);
    var arreglito = [1, 2, 3];
    var miOtroArreglito = __spreadArrays(arreglito); // Ref -> Direccion de Memoria
    // ASIGNAR A MI OTRO ARREGLO UNA NUEVA DIRECCION DE MEMORIA
    // 1 -> For llenamos un nuevo arreglo
    // 2 -> Filter -> Siempre true -> Nuevo Arreglo
    // 3 -> Map -> Nuevo Arreglo
    //INMUTABILIDAD
    //JS -> Arreglos u Objetos -> Clon!
    // CLON DEL ARREGLO -> Trabaja en el CLON
    var a = arreglito[0];
    var b = arreglito[1];
    console.log('arreglito', arreglito);
    console.log("Mi otro Arreglito", miOtroArreglito);
    console.log("a", a);
    console.log('b', b);
    miOtroArreglito = arreglito;
    miOtroArreglito.push(2);
    arreglito[0] = 9;
    arreglito[1] = 10;
    console.log('arreglito', arreglito);
    console.log("Mi otro Arreglito", miOtroArreglito);
    console.log("a", a);
    console.log('b', b);
    var adrian = {
        id: 1,
        nombre: "Adrian",
        sueldo: 1.12,
    };
    var soloElNombre = __assign({}, adrian);
    var copUno = __assign({}, adrian);
    var copDos = __assign({}, soloElNombre);
    var copTres = __assign({}, adrian);
    console.log('Adrian', adrian);
    console.log('Solo el nombre', soloElNombre);
    delete adrian.nombre; // Eliminar el nombre del objeto
    soloElNombre['edad'] = 22;
    // soloElNombre.edad = 22;
    console.log('Adrian', adrian);
    console.log('Solo el nombre', soloElNombre);
    console.log("copia Uno", copUno);
    console.log("copia dos", copDos);
    console.log("copia tres", copTres);
}
main();
