const arregloNumeros = [1, 2, 3, 9, 4, 5, 6, 7, 8, 9];
//Acceder
//Nesecito:  Indice
console.log(arregloNumeros[6]); // 7
//Añadir al final
// Necesito: Elemento a añadirse
arregloNumeros.push(11);
// Borrar ultimo
arregloNumeros.pop();
//Añadir en un indice
// Necesito: indice
//           elemento
arregloNumeros.splice(1, 0, 1.1);
console.log(arregloNumeros);
// o Borrar
arregloNumeros.splice(7, 1);
console.log(arregloNumeros);
// BUSCAR EL INDICE DE UN ELEMENTO
arregloNumeros.indexOf(5);
arregloNumeros.indexOf(7);
console.log(arregloNumeros.indexOf(9)); // muestra el indice del primer elemento que encuentra que cumple la condicion
console.log(arregloNumeros.indexOf(11)); // si no encuentra el elemento devuelve -1

arregloNumeros[0] = 999;
console.log(arregloNumeros)
