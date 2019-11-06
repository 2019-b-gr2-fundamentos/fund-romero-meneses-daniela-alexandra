//EJEMPLOS SWITCH
// 1 

const paisesConU = "Uganda";
 switch(paisesConU) {
     case "Ucrania" :
         console.log("UCRANIA\n",
          "Ucrania es una de las últimas fronteras de Europa:\n",
          "una nación pobre pero rica en tradiciones,\n",
          "con rutas apenas holladas y gente cariñosa.")
          break;
     case "Uganda":
        console.log("UGANDA\n", 
        "Rodeado de majestuosas montañas e impresionantes\n", 
        "cataratas, el país es capaz de enamorar a cualquiera\n",
        "que tenga la suerte de visitarlo")
        break;
     case "Uruguay":
         console.log("URUGUAY\n",
         "Uruguay es un precioso país ubicado en américa del Sur\n",
         "El país tiene magníficas opciones para el turismo,\n",
         "como Punta del Este y Cabo Polonio que,\n",
          "tienen balnearios con aguas tranquilas y con olas enormes")   
         break;
     case "Uzbekistan":
         console.log("UZBEKISTAN\n",
         "Uzbekistán, turismo mágico en el corazón de Asia.\n",
         "Un país casi desconocido, enclavado en las puertas\n",
         "del poderoso desierto y por donde antaño circulaba\n",
          "la importante Ruta de la Seda.")    
     default :
     console.log("elija un pais cuyo nombre empiece con la letra U")   
 }

// 2

const elijaUnColor = "verde";
switch(elijaUnColor){
     case "azul":
        console.log("AZUL\n",
        "El azul es el color de la tranquilidad,\n",
        "de la paz espiritual, aquel que nos hace\n",
        "sentir cómodos y tranquilos.")
        break;
     case "rojo" :
         console.log("ROJO\n",
         "El Rojo simboliza el poder, \n",
         "la acción, color al que se asocia con la vitalidad,\n", 
         "la ambición y la pasión.")
         break;
     case "verde":   
         console.log("VERDE\n",
         "El Color Verde es relajante y refrescante\n",
         "que induce a quién lo contempla sensaciones\n", 
         "de serenidad y armonía.") 
         break;
     case "amarillo" :
          console.log("AMARILLO\n",
          "Al color amarillo se le asocia con la felicidad,\n",
          "la alegría y el optimismo pero tambien, lo suelen asociar\n", 
          "con los celos, la envidia, el egoísmo y algunas enfermedades")
          break;
     default:
         console.log("Elija entre los colores: amarillo, azul, verde, rojo")
         break;   
}   

// 3

const valorSorpresa = 5;

switch(valorSorpresa){
    case 1:
        console.log("Su futuro estara lleno de bendiciones")
        break;
    case 2:
        console.log("usted ganara la loteria")
        break;
    case 3:
        console.log("tendra problemas pero lograra resolverlos")
        break;
    case 4:
        console.log("veo un futruro obscuro con muchas complicaciones")
        break;
    case 5:
        console.log("no le queda mucho tiempo de vida")
        break;
    default:
        console.log("no crea todo lo que una maquina diga")
        break;
}