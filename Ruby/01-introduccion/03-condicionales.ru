casado = true
if !casado
    printf('No estoy casado')
else 
    printf('Estoy casado')
end
if casado
  printf('Estoy casado')
else
  printf('No estoy casado')
end
tengomosa = true
if casado && tengomosa
  printf('Casado y mosero')
else
  printf('O casado o mosero o nada')
end
casadoymosero = !casado && !tengomosa
if casadoymosero
  printf('o casado o mosero o nada')
else
  printf('casado y mosero')
end
