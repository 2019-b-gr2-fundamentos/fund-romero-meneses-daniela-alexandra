numerouno = 2
numerodos = 5
q1 = 3
q2 = 2
r = 6
leydegauss = ((1/(4*3.1415*8.85*10E-12))*(q1*q2)/(r*r))

if numerouno + numerodos
    printf(numerouno + numerodos)
elsif numerouno - numerodos
  printf(numerouno - numerodos)
elsif numerouno * numerodos
  printf(numerouno* numerodos)
elsif numerouno / numerodos
  printf(numerouno/numerodos)
elsif leydegauss
printf(leydegauss)
else
  printf('ingrese valores numericos o valor a las cargas')
end

calculadora = 'suma'
case calculadora
when 'suma'
    printf(numerouno+numerodos)
when 'resta'
    printf(numerouno-numerodos)
when 'multiplicacion'
    printf(numerouno*numerodos)
when 'division'
    printf(numerouno/numerodos)
when 'Ley de Gausse'
    printf(leydegauss)
else
    printf('ingrese valores a los numeros o ingrese tamaño/n", 
        "de las cargas en conjunto con el radio')
end
