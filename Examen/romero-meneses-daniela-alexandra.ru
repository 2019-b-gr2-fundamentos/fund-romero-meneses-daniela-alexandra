# EXAMEN PRIMER BIMESTRE
# PARTE 1
# Crer una calculadora que realice sumas, restas, multiplicaciones, divisiones y operaciones extras

def operacion
  puts "Escriba 1 para suma, 2 para resta, 3 para multiplicacion, 4 para division, 5 para volumenes"
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

  if calculos_actuales == 'error'

    "No entiendo la operacion, lo intentamos de nuevo?"

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