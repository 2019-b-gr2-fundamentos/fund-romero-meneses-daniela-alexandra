# EXAMEN PRIMER BIMESTRE
# PARTE 1
# Crer una calculadora que realice sumas, restas, multiplicaciones, divisiones y operaciones extras


def calculadora
  def suma (numuno, numdos)
    numuno + numdos
  end
  def resta (numuno, numdos)
    numuno - numdos
  end
  def multiplicacion (numuno, numdos)
    numuno * numdos
  end
  def division(numuno, numdos)
    numuno/numdos
  end
  def volumentrapezoide (baseme , basema , alturame , alturama)
    ((1/2)*(baseme+basema)*alturame)*alturama
  end
  def volumentetraedro (lado)
    ((lado^2)*Math.sqrt(2))/12
  end
  def volumenesfera(radio)
    ((4/3)*Math::PI*(radio^3))
  end
  def volumencilindro(radio, altura)
    Math::PI * (radio^2) * altura
  end
  def volumencono (radio, altura)
    (Math::PI * (radio^2) * altura)/3
  end
  def volumenpiramidatriangular (ladobase, altura)
    (((Math.sqrt(3))/12) * ladobase * altura)
  end
  operacion = gets('Seleccione una opcion: "suma-1", "resta-2", "multiplicacion-3", "division-4", "volumenes-5", "terminamos-6" ')
  essuma = operacion == 'suma' || operacion == 'suma-1' || operacion == "1"
  esresta = operacion == 'resta' || operacion == 'resta-2' || operacion == '2'
  esmultiplicacion = operacion == 'multiplicacion' || operacion == 'multiplicacaion-3' || operacion == '3'
  esdivision = operacion == 'division' || operacion == 'division-4' || operacion == '4'
  esvolumen = operacion == 'volumen' || operacion == 'volumen-5' || operacion == '5'
  setermino = operacion == 'terminamos' || operacion == 'terminamos-6' || operacion == '6'
  estavalida = essuma || esresta || esmultiplicacion || esdivision || esvolumen
  if estavalida
    if esvolumen
      operaciondos = gets('Seleccione un volumen: "trapezoide-1", "tetraedro-2","esfera-3", "cilindro-4", "cono-5", "piramide triangular-6", "terminamos-7"')
      estrapezoide = operaciondos == 'trapezoide' || operaciondos == 'trapezoide-1' || operaciondos == '1'
      estetraedro = operaciondos == 'tetraedro' || operaciondos == 'tetraedro-2' || operaciondos == '2'
      esesfera = operaciondos == 'esfera' || operaciondos == 'esfera-3' || operaciondos == '3'
      escilindro = operaciondos == 'cilindro' || operaciondos == 'cilindro-4' || operaciondos == '4'
      escono = operaciondos == 'cono' || operaciondos == 'cono-5' || operaciondos == '5'
      espiramide = operaciondos == 'piramide triangular' || operaciondos == 'piramide triangular-6' || operaciondos == '6'
      terminamos = operaciondos == 'terminamos'|| operaciondos == 'terminamos-7' || operaciondos == '7'
      resultado = 0
      if estrapezoide
        alturame = gets.to_f
        alturama = gets.to_f
        baseme = gets.to_f
        basema = gets.to_f
        resultado.volumentrapezoide(baseme, basema, alturame, alturama)
      end
      if estetraedro
        lado = gets.to_f
        resultado.volumentetraedro(lado)
      end
      if esesfera
        radio = gets.to_f
        resultado.volumenesfera(radio)
      end
      if escilindro
        radio = get.to_f
        altura = get.to_f
        resultado.volumencilindro(radio,altura)
      end
      if escono
        radio = get.to_f
        altura = get.to_f
        resultado.volumencono(radio,altura)
      end
      if espiramide
        ladobase = get.to_i
        altura = get.to_i
        resultado.volumenpiramidatriangular(ladobase, altura)
      end
      puts "resultado = #{resultado}"

      if terminamos
        puts "Terminamos"
      else
        calculadora
      end
     else
      numuno = gets.to_f
      numdos = gets.to_f
      resultado = 0
      if essuma
        resultado.suma(numuno,numdos)
        puts "resultado = #{resultado}"
      end
      if esresta
        resultado.resta(numuno, numdos)
        puts "resultado = #{resultado}"
      end
      if esmultiplicacion
        resultado.multiplicacion(numuno, numdos)
        puts "resultado = #{resultado}"
      end
      if esdivision
        resultado.division(numuno, numdos)
        puts "resultado = #{resultado}"
      end

      end
    elsif setermino
        printf("Terminamos")
      else
        calculadora
  end
end

calculadora

