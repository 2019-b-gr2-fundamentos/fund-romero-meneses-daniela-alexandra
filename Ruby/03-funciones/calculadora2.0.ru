
  
  def respuesta_actualizar
  
    puts "Seleccione una categoria 1 para Men's Singles, 2 para Men's Doubles, 3 para Women's Singles, 4 para Women's Doubles, 5 para Mix Doubles "
    seleccion_actualizar = gets.to_i
  
    if seleccion_actualizar == 1
      "Men Singles"
    elsif  seleccion_actualizar == 2
      "Men Doubles"
    elsif  seleccion_actualizar == 3
      "Women Single"
    elsif  seleccion_actualizar == 4
      "Women Doubles"
    elsif seleccion_actualizar == 5
      "Mix Doubles"
    else
      "error"
    end
  end
  
  iniciar_operacion = 1
  
  while iniciar_operacion == 1
  
    programa = torneos
  
    if programa == "salir"
  
      iniciar_operacion = 0
  
    elsif programa == "error"
  
      puts "Seleccion no aceptada"
  
      iniciar_operacion = 1
  
    elsif programa == "anadir"
  
      def array(elementos)
        puts "Ingrese la ubicacion"
        i = gets.to_i
        puts "Ingrese nombre de torneo"
        torneo_nombre = gets
  
        elementos.insert(i,torneo_nombre)
  
        puts elementos
      end
      anadir = array
      
      puts "Presione 1 para hacer regresar a las opciones principales"
  
      iniciar_operacion = gets.to_i
  
    elsif  programa == "borrar"
  
      puts "Ingrese posicion empezando desde el 1"
  
      indice = gets.to_i - 1
  
      posicion.delete_at(indice)
  
      puts posicion
  
      puts "Presione 1 para hacer regresar a las opciones principales"
  
      iniciar_operacion = gets.to_i
  
    elsif programa == "actualizar"
      puts "Seleccione torneo ubicacion del torneo"
  
      indicetres = gets.to_i - 1
  
      seleccion_tipo = respuesta_actualizar()
  
      if seleccion_tipo == "Men Single"
        if posicion[indicetres] == 'shanghai masters'
          puts "Ronnie O'Sullivan"
        elsif posicion[indicetres] == 'australia open'
          puts "Novak Djokovic"
        elsif posicion[indicetres] == 'italian open'
          puts "Rafael Nadal"
        else
          "error"
        end
      elsif seleccion_tipo == "Woman Single"
          if posicion[indicetres] == 'australia open'
            puts "Naomi Osaka"
          elsif posicion[indicetres] == 'italian open'
            puts ""
          else
            "error"
          end
      elsif seleccion_tipo == "Men Double"
        if posicion[indicetres] == 'australia open'
          puts "Pierre-Hugues Herbert & Nicolas Mahut"
        elsif posicion[indicetres] =='italian open'
          puts ""
        else
          "error"
        end
      elsif seleccion_tipo == "Women Doubles"
        if posicion[indicetres] == "australia open"
          puts "Samantha Stosur & Zhang Shuai"
        elsif posicion[indicetres] == 'italian open'
          puts ""
        else
          "error"
        end
      elsif seleccion_tipo == "Mix Doubles"
        if posicion[indicetres] == 'australia open'
          puts "Barbora Krejčíková & Rajeev Ram"
        else
          "error"
        end
      end
      puts "Presione 1 para hacer regresar a las opciones principales"
  
      iniciar_operacion = gets.to_i
    else
      puts "Presione 1 para hacer regresar a las opciones principales"
  
      iniciar_operacion = gets.to_i
    end
  end