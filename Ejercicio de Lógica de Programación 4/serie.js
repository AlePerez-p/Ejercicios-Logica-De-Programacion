// Programa para hacer una serie de fibonnacci 

console.log("holi");


//Funcion para generar la serie 
function serieFibonacci(){
    var numero= document.getElementById('numeroIngresado').value;
    const arrSerie = [0, 1]; 
     
    //Hacemos un ciclo for para el calculo del factorial 
     for( var i=2; i< numero; i++) {
      arrSerie.push(arrSerie [i -1] + arrSerie [i - 2]) + arrSerie;
     }
     
     document.getElementById('resultado').innerHTML=`La serie Fibonacci de ${numero} es : ${arrSerie}`; 
}

