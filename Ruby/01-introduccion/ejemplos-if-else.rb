# EJEMPLOS IF Y ELSE

# 1
calificacion = 5
if calificacion >= 0 && calificacion  < 4.5
  printf('reprobado')
elsif calificacion >= 4.5 && calificacion < 7
  printf('suspension')
elsif calificacion >= 7 && calificacion <=10
  printf('aprobado')
end
# 2
estalloviendo = true
nohicelatarea = true
if estalloviendo && nohicelatarea
  printf('no voy a clases')
elsif !estalloviendo && nohicelatarea
  printf('invento una escusa')
elsif estalloviendo && !nohicelatarea
  printf('llevo paraguas')
elsif !estalloviendo && !nohicelatarea
  printf('voy a clase')
end
# 3
mirounapelicula = true
hagodeberes = true
if mirounapelicula && hagodeberes
  printf('no me concentro y me pierdo buenas escenas')
elsif !mirounapelicula && hagodeberes
  printf('termino rapido deberes')
elsif mirounapelicula && !hagodeberes
  printf('disfruto la pelicula')
elsif !mirounapelicula && !hagodeberes
  printf('no hago nada')
end