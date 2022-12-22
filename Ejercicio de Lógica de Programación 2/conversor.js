//Funciones para convertir de grados Celsius a grados Farenheit y Kelvin

//Formula para convertir de celsius a farenheit : temp celsius * (9/5) + 32
//Formula  para convertir celsius a kelvin : temp Celsius + 273.15

//console.log ("hola a todos"); lo uso para verificar la conexion con el html 
//Para visualizar los resultados es necesario abrir la consola. 



//Pedir al usuario ingrese la temperatura en °C
var  temp; 
var resultado;

temp = parseFloat(prompt('Ingrese la temperatura en °C'));

// Crear la primera conversion 
resultado =((9/5 * temp) + 32);  

console.log(`${temp} °C equivale a: ${resultado} °F`);


// Crear la  segunda conversion 

var resultado2;

resultado2 = (273.15 + temp);

console.log(`${temp} °C equivale a: ${resultado2} °F`);



