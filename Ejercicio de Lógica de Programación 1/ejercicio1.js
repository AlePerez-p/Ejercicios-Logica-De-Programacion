// Programa para pedir 3 datos y montrarlos ordenados de mayor a menor y de menor a mayor 



//console.log("Holi a todos");

const numeros = document.getElementById('numeros');
const resultado1 = document.getElementById('resultado1');
const resultado2 = document.getElementById('resultado2');

//Pedir al usuario ingrear 3 datos 
let a = prompt('Ingrese el primer número');
let b = prompt('Ingrese el segundo número');
let c = prompt('Ingrese el tercer numero');

numeros.textContent= `Los numeros ingresados son: ${a}, ${b}, ${c}`

//Hacer la iteracion para saber que número es mayor y hacer el orden 
if ( a>=b && a>=c){ //Para saber si a es mayor 
    if (b>c){
      resultado1.innerHTML = `El orden de mayor a menor es: ${a}, ${b}, ${c}`;
    }else{
        resultado1.innerHTML = `El orden de mayor a menor es: ${a}, ${c}, ${b}`;
    }
}else if (b>=a && b>=c) { //Para saber si b es mayor 
    if (a>c){
        resultado1.innerHTML= `El orden de mayor a menor es: ${b}, ${a}, ${c}`;
    }else{
        resultado1.innerHTML = `El orden de mayor a menor es: ${b}, ${c}, ${a}`;
    }

}else if (c>=a && c>=b){ //Para saber si a es mayor 
    if (a>b){
        resultado1.innerHTML = `El orden de mayor a menor es: ${c}, ${a}, ${b}`;
    }else{
        resultado1.innerHTML = `El orden de mayor a menor es: ${c}, ${b}, ${a}`;
    }
}



//Hacer la iteracion para saber que número es menor y hacer el orden
if ( a<=b && a<=c){ //Para saber si a es menor 
    if (b<c){
      resultado2.textContent = `El orden de menor a mayor es: ${a}, ${b}, ${c}`;
    }else{
        resultado2.textContent = `El orden de menor a mayor es: ${a}, ${c}, ${b}`;
    }
}else if (b<=a && b<=c) { //Para saber si b es menor 
    if (a<c){
        resultado2.textContent= `El orden de menor a mayor es: ${b}, ${a}, ${c}`;
    }else{
        resultado2.textContent = `El orden de menor a mayor es: ${b}, ${c}, ${a}`;
    }

}else if (c<=a && c<=b){ //Para saber si a es menor 
    if (a<b){
        resultado2.textContent = `El orden de menor a mayor es: ${c}, ${a}, ${b}`;
    }else{
        resultado2.textContent = `El orden de menor a mayor es: ${c}, ${b}, ${a}`;
    }
}


