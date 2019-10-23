#                Variables Primitivas en Ruby
# En el lenguaje de programación Ruby no existen variables primitivas
# debido a  que todas las varibles son consideradas objetos. Además, Ruby 
# no necesita definir el tipo de variable que es antes de inicializarla

# TIPOS DE VARIABLES EN RUBY
# Variables Locales: no tienen ningún prefijo
variable_local = "variable"

# Variables Globales: se pueden acceder desde cualquier sitio y 
# se escriben con el símbolo $ delante
$variable_global = 5

# Variables para instanciar un objeto: se escriben con una arroba @ delante
@carro = Carro.new
@carro.color = "rojo"
