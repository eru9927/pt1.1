"use strict";

//EJERCICIO 1
let nota = prompt("Dame una nota")
if(isNaN(nota)) //isNaN es para comprobar si es un numero o no.
{
    alert('No has introducido un numero')

}
else
{
    if(nota < 5 && nota >= 0)
    {
        console.log("Suspendido")
    }
    else if(nota >= 5 && nota <= 6.9)
    {
        console.log("Aprovado")
    }
    else if(nota >= 7 && nota <= 8.9)
    {
        console.log("Notable")
    }
    else if(nota >= 9 && nota <= 10)
    {
        console.log("Excelente")
    }
    else
    {
        console.log("Nota incorrecta")
    }
}

//EJERCICIO 2
let dia = 2;
switch (dia) {
    case 1:
        console.log('Lunes')
        break;
    case 2:
        console.log('Martes')
        break;
    case 3:
        console.log('Miercoles')
        break;
    case 4:
        console.log('Jueves')
        break;
    case 5:
        console.log('Viernes')
        break;
    case 6:
        console.log('Sabado')
        break;
    case 7:
        console.log('Domingo')
        break;
    default:
        console.log('Dia incorrecto')
        break;
}

//EJERCICIO 3
let num3 = 5;
for (let i = 0; i <= 10; i++) 
{
    let resultado = num3 * i;
    console.log(`${num3} x ${i} = ${resultado}`)
}

//EJERCICIO 4
let i = 0;
let num4;
let resultado = 0;
do{
    num4 = prompt('Introduce un numero para calcular su suma')
}while(isNaN(num4) || num4<0)
while(i <= num4)
{
    resultado += i;
    i++;
}
console.log(`El resultado de la suma es ${resultado}`)

//EJERCICIO 5
let password = 'javascript2024'
let userpass = ''
while(password != userpass)
{
    userpass = prompt('Introduce la contraseña')
}
console.log('Contraseña aceptada')

//EJERCICIO 6
let num6;
do{
    num6 = prompt('Introduce un numero')
}while(isNaN(num6) || num6<0)

for (let i = 1; i <= num6; i++) 
{
    if(i%2==0)
    {
        console.log(`${i}`)
    }
}

//EJERCICIO 7
let num7 = Math.floor(Math.random()*9+1);
console.log(num7)
let respuesta7;
do{
    do{
        respuesta7 = prompt('Introduce un numero del 1 al 10')
    }while(isNaN(respuesta7) || respuesta7<1 || respuesta7>10)
}while(num7 != respuesta7)
console.log(`Has adivinado el numero ${num7}!`)

//EJERCICIO 8
let eleccion8 = "euro";
let dinero;
let resultado8 = 0;
do{
    dinero = prompt('Introduce el dinero a convertir')
}while(isNaN(dinero) || dinero<0)
switch (eleccion8) {
    case "euro":
        resultado8 = dinero * 1.18;
        console.log(`${dinero} dolares en euros son: ${resultado8} €`)
        break;
    case "dolar":
        resultado8 = dinero * 0.85;
        console.log(`${dinero} euros en dolares son: ${resultado8} $`)
        break;
    default:
        break;
}

//EJERCICIO 9
let bot = Math.floor(Math.random()*3+1)
let eleccion_bot;
let eleccion9;
switch (bot) {
    case 1:
        eleccion_bot = "piedra";
        break;
    case 2:
        eleccion_bot = "papel";
        break;
    case 3:
        eleccion_bot = "tijera";
        break;
    default:
        break;
}
do{
    eleccion9 = prompt("Elije en minuscula!-> piedra, papel o tijera")
}while(eleccion9 != "piedra" && eleccion9 != "papel" && eleccion9 != "tijera")
    
if(eleccion9 == eleccion_bot)
{
    console.log(`EMPATE. ${eleccion9} empata con ${eleccion_bot}`)
}
else if((eleccion9 == "piedra" && eleccion_bot == "tijera") || (eleccion9 == "papel" && eleccion_bot == "piedra") || (eleccion9 == "papel" && eleccion_bot == "piedra")){
    console.log(`HAS GANADO. ${eleccion} gana a ${eleccion_bot}`)
}else{
    console.log(`HAS PERDIDO. ${eleccion9} pierde contra ${eleccion_bot}`)
}

//EJERCICIO 10
let dado = Math.floor(Math.random()*6+1)
console.log(dado)
let num10;
do{
    num10 = prompt('Introduce un numero del 1-6')
}while(isNaN(num10) || num10<1 || num10>6)

if(num10 == dado)
{
    console.log("HAS GANADO!")
}else{
    console.log(`HAS PERDIDO, LA TIRADA ERA ${dado}`)
}
