//Funcion para hacer el calculo de un número factorial.
//Consideramos el factorial de un número es igual al producto de todos los números enteros positivos desde el 1 hasta dicho número.

console.log("hola mundo ");


function calculoFactorial(){
    var numero= document.getElementById('numeroIngresado').value;
    var resultado = 1; 
    //Hacemos un ciclo for para el calculo del factorial 
     for( var i=1; i<=numero; i++) {
        resultado = resultado*i;
     }
   
     document.getElementById('resultado').innerHTML=`El factorial de ${numero} es : ${resultado}`; 
}
