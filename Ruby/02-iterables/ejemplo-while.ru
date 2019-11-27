# CONTADOR DE DEBERES
#1 Analisis
#2 Algebra
#3 Compiladores
#5 Programacion
#7 Calculo 
#11 Fisica
#13 Ingles
#si es impar -> aumentamos a analisis socioeconomico
#si es par -> aumentamos a algebra
#si es multiplo de tres -> aumentamos a compiladores
#si es multiplo de cinco -> aumentamos a programacion
#si es multiplo de siete -> aumentamos a calculo
#si es multiplo de once -> aumentamos a fisica
#si es multiplo de trece -> aumentamos a ingles

numero = 0
analisis = 0
algebra = 0
compiladores= 0
programacion = 0
calculo = 0
fisica = 0
ingles = 0
begin numero = numero + 1
if numero % 13 == 0
       ingles = ingles + 1
     elsif numero % 11 == 0
       fisica = fisica + 1
     elsif numero % 7 == 0
       calculo = calculo + 1
     elsif numero % 5 == 0
       programacion = programacion + 1
     elsif numero % 3 == 0
       compiladores = compiladores + 1
     elsif numero % 2 == 0
       algebra = algebra + 1
     else numero % 2 == 1
     analisis = analisis + 1
end
end while numero < 1000



print"Deberes que hice \n"
print "Ingles": ingles
print "Fisica": fisica
print "Calculo": calculo
print "Programacion": programacion
print "Compiladores": compiladores
print "Algebra": algebra
print "Analisis": analisis
