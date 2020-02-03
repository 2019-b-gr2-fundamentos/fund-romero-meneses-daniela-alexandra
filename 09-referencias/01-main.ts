function main(){
    let uno = 1;
    let dos = uno; //Asignacion al valor de una variable
    let tres = dos;//Asignacion al valor de una variable
    console.log("uno", uno);
    console.log( "dos", dos);
    console.log('tres', tres);
    uno = 5;
    console.log("uno", uno);
    console.log("dos", dos);
    console.log('tres', tres);

    let arreglito = [1,2,3];
    let miOtroArreglito = [
        ...arreglito,
        //...arreglito,        (Se puede copiar varios arreglos, si se desea)
        //...arreglito,
        //...arreglito,
        //...arreglito,
        //...arreglito,
        //...arreglito,
        //...arreglito,
        //...arreglito
    ];// Ref -> Direccion de Memoria
    // ASIGNAR A MI OTRO ARREGLO UNA NUEVA DIRECCION DE MEMORIA
    // 1 -> For llenamos un nuevo arreglo
    // 2 -> Filter -> Siempre true -> Nuevo Arreglo
    // 3 -> Map -> Nuevo Arreglo

    //INMUTABILIDAD
    //JS -> Arreglos u Objetos -> Clon!
    // CLON DEL ARREGLO -> Trabaja en el CLON

    let a = arreglito[0];
    let b = arreglito[1];
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

    const adrian = {
        id: 1,
        nombre: "Adrian",
        sueldo: 1.12,
    };
    const soloElNombre = {
        ...adrian
    };
    const copUno = {
        ...adrian
    };
    const copDos = {
        ...soloElNombre
    };
    const copTres = {
        ...adrian
    };
    console.log('Adrian', adrian);
    console.log('Solo el nombre', soloElNombre);
    delete adrian.nombre; // Eliminar el nombre del objeto
    soloElNombre['edad']= 22; 
    // soloElNombre.edad = 22;
    console.log('Adrian', adrian);
    console.log('Solo el nombre', soloElNombre);
    console.log("copia Uno",copUno);
    console.log("copia dos", copDos);
    console.log("copia tres", copTres);

}

main();