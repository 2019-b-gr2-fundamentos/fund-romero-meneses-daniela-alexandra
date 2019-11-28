def imprimirnveces(mensaje, numeroveces)
  if numeroveces == 0
    printf('Se Termino')
  else
    printf(mensaje)
    nuevonumeroveces = numeroveces - 1
    imprimirnveces(mensaje, nuevonumeroveces)
  end
end

def main
  imprimirnveces( 'hola', 5)
end
main

=begin
def arregloderecho(arreglo)
arreglo.each do |a|
  a+1
  printf(arreglo[a])
end
end

def main2
  arregloderecho([2, 3, 5])
end
main2
=end
