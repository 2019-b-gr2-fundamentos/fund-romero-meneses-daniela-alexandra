# EXAMEN PRIMER BIMESTRE
# PARTE 1
# Crer una calculadora que realice sumas, restas, multiplicaciones, divisiones y operaciones extras

def operacion
  puts "Escriba 1 para suma, 2 para resta, 3 para multiplicacion, 4 para division, 5 para volumenes, 6 para salir"
  seleccion_operacion = gets.to_i

  if seleccion_operacion ==  1
    "suma"
  elsif seleccion_operacion == 2
    "resta"
  elsif seleccion_operacion == 3
    "multiplicacion"
  elsif seleccion_operacion == 4
    "division"
  elsif  seleccion_operacion == 5
    "volumen"
  elsif  seleccion_operacion == 6
    "salir"
  else
    'error'
  end

end

def respuestas_volumenes
  puts "Escoja 1 para trapezoide, 2 para tetraedro, 3 para esfera, 4 para cilindro, 5 para cono, 6 para piramide triangular"
  seleccion = gets.to_i
  if seleccion == 1
    "trapezoide"
  elsif seleccion ==  2
    "tetraedro"
  elsif  seleccion == 3
    "esfera"
  elsif seleccion == 4
    "cilindro"
  elsif seleccion ==  5
    "cono"
  elsif  seleccion == 6
    "piramide"
  else
    "error"
  end
end

def respuesta_calculos(operador, numuno, numdos)
  if operador == "suma"
    numuno + numdos
  elsif operador == "resta"
    numuno - numdos
  elsif operador == "multiplicacion"
    numuno * numdos
  elsif operador == "division"
    numuno / numdos
    else
      'error'
    end
end

def volumen_trapezoide ( constra, baseme, basema, alturame, alturama)
  (constra * ( baseme + basema ) * alturame ) * alturama
end
def volumen_tetraedro(conste, lado)
   (conste * lado * lado)
end
def volumen_esfera( constes, radio)
   (constes * radio * radio * radio)
end
def volumen_cilindro(constci, radio, altura)
   (constci * radio * radio * altura)
end
def volumen_cono(constco, radio, altura)
   (constco * radio * radio * altura)
end
def volumen_piramide(constpi, ladobase, altura)
  (constpi * ladobase * altura)
end

run_calculadora = 1

while run_calculadora == 1

  calculos_actuales = operacion()
  if calculos_actuales == "salir"

    run_calculadora = 0

  elsif calculos_actuales == 'error'

    puts "No entiendo la operacion, lo intentamos de nuevo?"
    
    run_calculadora = 1

  elsif calculos_actuales == 'volumen'

    volumenes = respuestas_volumenes()

    if volumenes == "trapezoide"
      constra = 0.5
      puts "Ingrese base menor"
      baseme = gets.to_f
      puts "Ingrese base mayor"
      basema = gets.to_f
      puts "Ingrese altura menor"
      alturame = gets.to_f
      puts "Ingrese altura mayor"
      alturama = gets.to_f

      respuesta = volumen_trapezoide(constra, baseme,basema,alturame,alturama)

      puts "Su respuesta es #{respuesta}"

      puts "Presione 1 para hacer otro calculo, otro para salir"

      run_calculadora = gets.to_i

    elsif volumenes == "tetraedro"
      conste = 0.11785

      puts "Ingrese el valor del lado"
      lado = gets.to_i

      respuesta = volumen_tetraedro(conste,lado)

      puts "Su respuesta es #{respuesta}"
      puts "Presione 1 para hacer otro calculo, otro para salir"

      run_calculadora = gets.to_i

    elsif volumenes == "esfera"
      constes = (4/3)* Math::PI

      puts "Ingrese datos del radio"

      radio = gets.to_i

      respuesta = volumen_esfera(constes,radio)

      puts "Su respuesta es #{respuesta}"

      puts "Presione 1 para hacer otro calculo, otro para salir"

      run_calculadora = gets.to_i

    elsif volumenes == "cilindro"
      constci = Math::PI
      puts "Ingrese valor de radio"
      radio = gets.to_i
      puts "Ingrese valor de la altura"
      altura = gets.to_i

      respuestaes = volumen_cilindro(constci, radio, altura)

      puts "Su respuesta es #{respuestaes}"

      puts "Presione 1 para hacer otro calculo, otro para salir"

      run_calculadora = gets.to_i

    elsif volumenes == "cono"
      constco = 1.047198
      puts "Ingrese valor de radio"
      radio = gets.to_f
      puts "Ingrese valor de altura"
      altura = gets.to_f

      respuesta = volumen_cono(constco, radio, altura)

      puts "Su respuesta es #{respuesta}"

      puts "Presione 1 para hacer otro calculo, otro para salir"

      run_calculadora = gets.to_i

    elsif volumenes == "piramide"
      constpi = 0.1443376
      puts "Ingrese valor de lado de la base"
      ladobase = gets.to_f
      puts "Ingrese valor altura"
      altura = gets.to_f

      respuesta = volumen_piramide(constpi, ladobase, altura)

      puts "Su respuesta es #{respuesta}"

      puts "Presione 1 para hacer otro calculo, otro para salir"

      run_calculadora = gets.to_i

    else
      "error"

      puts "Presione 1 para hacer otro calculo, otro para salir"

      run_calculadora = gets.to_i
    end
  elsif calculos_actuales == 'suma' || 'resta' || 'multplicacion' || 'division'
    puts "Ingrese el primer numero"
    primer_numero = gets.to_f
    puts "Ingreese el segundo numero"
    segundo_numero = gets.to_f

    respuesta = respuesta_calculos(calculos_actuales, primer_numero, segundo_numero)

    puts "Su respuesta es #{respuesta}"

    puts "Presione 1 para hacer otro calculo, otro para salir"

    run_calculadora = gets.to_i

  else
    puts "Presione 1 para hacer otro calculo, otro para salir"

    run_calculadora = gets.to_i
  end
end


# PARTE 2
# Crear un arreglo en el que se pueda crear, borrar y actualizar los datos

$torneos = ["atp finals", "rolland garros", "wimbledon", "italian tour", "australia open"]

def torneo
  puts "Seleccione 1 para anadir torneo, 2 para borrar torneo, 3 mostrar ganadores, 4 salir "
  seleccion_torneos = gets.to_i
  if seleccion_torneos == 1
    "anadir"
  elsif  seleccion_torneos == 2
    "borrar"
  elsif seleccion_torneos == 3
    "actualizar"
  elsif seleccion_torneos == 4
    "salir"
  else
    "error"
  end
end

def respuesta_actualizar
  puts "Seleccione una categoria 1 para Men's Singles, 2 para Men's Doubles, 3 para Women's Singles, 4 para Women's Doubles "
  seleccion_actualizar = gets.to_i

  if seleccion_actualizar == 1
    "Men Singles"
  elsif  seleccion_actualizar == 2
    "Men Doubles"
  elsif  seleccion_actualizar == 3
    "Women Single"
  elsif  seleccion_actualizar == 4
    "Women Doubles"
  else
    "error"
  end
end

iniciar_operacion = 1

while iniciar_operacion == 1
  
  $torneos.each_with_index do |element, index|
  puts "#{index}: #{element}"
  end

  programa = torneo

  if programa == 'error'
    puts "Seleccion no reconocida"
    iniciar_operacion = 1
  elsif programa == "salir"
    iniciar_operacion = 0
  elsif programa == "anadir"

    puts "Ingrese posicion a anadir torneo"
    i = gets.to_i

    puts "Nombre de torneo"

    nuevo_torneo = gets

    $torneos.insert(i,nuevo_torneo)

    puts "\n"

    $torneos.each_with_index do |element, index|
      puts "#{index}: #{element}"
    end

    puts "Ponga 1 para realizar otra operacion"

    iniciar_operacion = gets.to_i
  elsif programa == "borrar"

    puts "Ingrese posicion de torneo a eliminar"

    indice = gets.to_i

    $torneos.delete_at(indice)

    puts "\n"

    $torneos.each_with_index do |element, index|
      puts "#{index}: #{element}"
    end

    puts "Presione 1 para hacer regresar a las opciones principales"

    iniciar_operacion = gets.to_i

  elsif programa == 'actualizar'

    tipodetorneo = respuesta_actualizar()

    puts "Ingrese posicion de torneo para ver sus ganadores"

    indiced = gets.to_i

        if tipodetorneo == 'Men Singles'
            if $torneos[indiced] == 'australia open'
              puts "Ganador Australia Open = Novak Djokovic"

              puts "Presione 1 para hacer regresar a las opciones principales"

              iniciar_operacion = gets.to_i
            elsif $torneos[indiced] == 'wimbledon'
              puts "Ganador Wimbledon = Novak Djokovic"

              puts "Presione 1 para hacer regresar a las opciones principales"

              iniciar_operacion = gets.to_i
            elsif $torneos[indiced] == 'atp finals'
              puts "Ganador ATP Finals = Stefanos Tsitsipas"

              puts "Presione 1 para hacer regresar a las opciones principales"

              iniciar_operacion = gets.to_i
            elsif $torneos[indiced] == 'roland garros'
              puts 'Ganador roland garros = Rafael Nadal'

              puts "Presione 1 para hacer regresar a las opciones principales"

              iniciar_operacion = gets.to_i
            elsif  $torneos[indiced] == 'italian open'
              puts ' Ganador Italian Open = Rafael Nadal'
              puts "Presione 1 para hacer regresar a las opciones principales"

              iniciar_operacion = gets.to_i
            else
              "error"
              puts "Presione 1 para hacer regresar a las opciones principales"

              iniciar_operacion = gets.to_i
            end
        elsif tipodetorneo == 'Women Singles'
          if $torneos[indiced] == 'australia open'
            puts  "Ganadora Australia Open = Naomi Osaka"

            puts "Presione 1 para hacer regresar a las opciones principales"

            iniciar_operacion = gets.to_i
          elsif $torneos[indiced] == 'wimbledon'
            puts " Ganadora Wimbledon = Simona Halep"

            puts "Presione 1 para hacer regresar a las opciones principales"

            iniciar_operacion = gets.to_i
          elsif $torneos[indiced] == 'atp finals'
            puts "N/A"

            puts "Presione 1 para hacer regresar a las opciones principales"

            iniciar_operacion = gets.to_i
          elsif $torneos[indiced] == 'roland garros'
            puts 'Ganadora Roland Garros = Ashleigh Barty'

            puts "Presione 1 para hacer regresar a las opciones principales"

            iniciar_operacion = gets.to_i
          elsif  $torneos[indiced] == 'italian open'
            puts 'Ganadora Italian Open Karolína Plíšková'

            puts "Presione 1 para hacer regresar a las opciones principales"

            iniciar_operacion = gets.to_i
          else
            "error"
            puts "Presione 1 para hacer regresar a las opciones principales"

            iniciar_operacion = gets.to_i
          end
        elsif tipodetorneo == 'Men Doubles'
          if $torneos[indiced] == 'australia open'
            puts "Ganadores Australia Open Pierre-Hugues Herbert & Nicolas Mahut"

            puts "Presione 1 para hacer regresar a las opciones principales"

            iniciar_operacion = gets.to_i
          elsif $torneos[indiced] == 'wimbledon'
            puts "Ganadores Wimbledon = Juan Sebastián Cabal & Robert Farah"
            puts "Presione 1 para hacer regresar a las opciones principales"

            iniciar_operacion = gets.to_i
          elsif $torneos[indiced] == 'atp finals'

            puts "Ganadores ATP Finals Pierre-Hugues Herbert & Nicolas Mahut"

            puts "Presione 1 para hacer regresar a las opciones principales"

            iniciar_operacion = gets.to_i
          elsif $torneos[indiced] == 'roland garros'
            puts 'Ganadores Roland Garros = SKevin Krawietz & Andreas Mies'

            puts "Presione 1 para hacer regresar a las opciones principales"

            iniciar_operacion = gets.to_i
          elsif  $torneos[indiced] == 'italian open'
            puts 'Ganadores Italian Open = Juan Sebastián Cabal & Robert Farah'

            puts "Presione 1 para hacer regresar a las opciones principales"

            iniciar_operacion = gets.to_i
          else
            "error"
            puts "Presione 1 para hacer regresar a las opciones principales"

            iniciar_operacion = gets.to_i
          end
        elsif tipodetorneo == 'Women Double'

          if $torneos[indiced] == 'australia open'
            puts "Ganadoras Australia Open Samantha Stosur & Zhang Shuai"

            puts "Presione 1 para hacer regresar a las opciones principales"

            iniciar_operacion = gets.to_i

          elsif $torneos[indiced] == 'wimbledon'

            puts "Ganadoras Wimbledon = Su-Wei Hsieh & Barbora Strýcová"

            puts "Presione 1 para hacer regresar a las opciones principales"

            iniciar_operacion = gets.to_i

          elsif $torneos[indiced] == 'atp finals'

            puts  "N/A"

            puts "Presione 1 para hacer regresar a las opciones principales"

            iniciar_operacion = gets.to_i

          elsif $torneos[indiced] == 'roland garros'
            puts 'Ganadoras Roland Garros = Tímea Babos & Kristina Mladenovic'

            puts "Presione 1 para hacer regresar a las opciones principales"

            iniciar_operacion = gets.to_i
          elsif  $torneos[indiced] == 'italian open'
            puts 'Ganadoras Italian Open = Victoria Azarenka & Ashleigh Barty'

            puts "Presione 1 para hacer regresar a las opciones principales"

            iniciar_operacion = gets.to_i
          else
            "error"
            puts "Presione 1 para hacer regresar a las opciones principales"

            iniciar_operacion = gets.to_i
          end
        else
          "error"
          puts "Presione 1 para hacer regresar a las opciones principales"

          iniciar_operacion = gets.to_i
        end

  else
    "error"
    puts "Presione 1 para hacer regresar a las opciones principales"

    iniciar_operacion = gets.to_i
  end

end
