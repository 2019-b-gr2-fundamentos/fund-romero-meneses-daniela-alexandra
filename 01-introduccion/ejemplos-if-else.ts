//EJEMPLOS IF & ELSE

// 1

const calificacion = 5;
if(calificacion >= 0 && calificacion < 4.5){
    console.log("reprobado")
}else{
    if(calificacion >= 4.5 && calificacion < 7){
        console.log("supletorio")
    }else{
        if(calificacion >= 7 && calificacion <= 10){
            console.log("aprobado")
        }else{
            console.log("ingrese numeros entre 0 y 10")
        }
    }
}

// 2

const estaLloviendo = true;
const noHiceLaTarea = true;

if(estaLloviendo == true && noHiceLaTarea == true){
    console.log("no voy a clases")
}else{
    if(estaLloviendo != true && noHiceLaTarea == true){
        console.log("invento una excusa")
    }else{
        if(estaLloviendo == true && noHiceLaTarea != true){
            console.log("llevo paraguas")
        }else{
            console.log("voy a clases")
        }
    }
}

// 3

const miroUnaPelicula = true;
const hagoDeberes = true;

if(miroUnaPelicula == true && hagoDeberes == true){
    console.log("no me concentro y me pierdo buenas escenas")
}else{
    if(miroUnaPelicula != true && hagoDeberes == true){
        console.log("termino rapido deberes")
    }else{
        if(miroUnaPelicula == true && hagoDeberes != true){
            console.log("disfruto la pelicula")
        }else{
            console.log("no hago nada")
        }
    }
}
