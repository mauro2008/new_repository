helloWord=true
saludo = false
function hello(saludo){
  if(saludo == helloWord){
    console.log("este es el saludo de un nuevo programador. ",saludo)
  }
  else{
    console.log("aun no estas preparado. ",saludo)
  }
  return saludo
}
hello(saludo=hello(saludo))

function getRandomArbitrary(min=1, max=10) {
  return Math.random() * (max - min) + min;
}


var azart = parseInt(getRandomArbitrary())

function adivinaElNumero(){
  let num = prompt("adivina el numero de l 1 al 100 ingresa un numero.")
  if(num>10 || num<0){
    alert("DEJE DE MOLESTAR VUELVASE SERIO CULICAGADO")

  }
  if(num == azart){
    document.write("has adivinado felicitaciones. ",azart)
    
  }
  else{
    document.write("<h1>no adivinaste continua intentandolo.</h1> ",azart)
  }
}
//adivinaElNumero()
// var adiv = adivinaElNumero()
// end(adivinaElNumero())

// end =>{
//   console.log(end)
// }
// end()




function nueva(num1, num2,){
  var num1 = parseInt(prompt("por favor ingrese un numero para multiplicar"));
  var num2 = parseInt(prompt("por favor ingrese otro numero para multiplicar"));
  let sum = num1 * num2;
  return sum 
}
//console.log(`el resultado de la multiplicacion es: ${nueva()}`)

//let box = document.getElementById("boss");
// var box = document.querySelector("h1");
// box.innerHTML = ("este es el nuevo h1");
// console.log(box);

// let boxx = document.querySelector(".div1");
// boxx.innerHTML = "este es el nuevo h1";
// console.log(boxx);

var seleccionarTodosLosDiv = document.getElementsByTagName("div");
let contenido = seleccionarTodosLosDiv[1];
contenido.innerHTML = 'esto sonara raro xD';
console.log(contenido);

var change = document.querySelector("img")
// change.addEventListener('click', function(){
//change.innerHTML = "img src='./images (3).jpg'"
change.addEventListener("mouseover", function () {
  change.src = "images (3).jpg";
//alert("siento un click que pasa pues xD");
});
var chang = document.querySelector("img")
chang.addEventListener("mouseout", function () {
chang.src = "images (2).jpg";
})


// let times = document.querySelector("img");
//   if (times.src = "images (2).jpg") {
//     times.src = setInterval(function () {times.src = "images (3).jpg"}, 3000);
//   }
//   else{
//     setInterval(times.src = "images (2).jpg"),5000;
//   }
  

// let times = document.querySelector("img");
// time.setInterval(function () {
//   chang.src = "images (3).jpg";
// }, 3000);


 function colo (){
   const colors = document.querySelector(prompt("escoja lo que desea cambiar"));
   const esco = prompt("escoja un color")
   color = colors
   color.style.background = esco;
   innerHTML = color
   
   
}

//colo()
//eventos 
/*fucus cuando ponco el mouse registra el evento
blur: cuando quito el mouse registra el evento
keydown cuando preciona una tecla registra el evento
keypress cuando presiono la tecla y la suelto se produce el evento
keyup al soltar la tecla se produce el evento */
var eventos = document.querySelector('#nombre')
eventos.addEventListener('keydown', function(event){
  console.log('[keydown] pulsando tecla ',String.fromCharCode(event.keyCode));
})
var eventos = document.querySelector("#nombre");
eventos.addEventListener("keypress", function (event) {
  console.log("[keypress] tecla presionada ", String.fromCharCode(event.keyCode));
});
var eventos = document.querySelector("#nombre");
eventos.addEventListener("keyup", function (event) {
  console.log("[keyup] tecla suelta ", String.fromCharCode(event.keyCode));
});
var eventos = document.querySelector("#nombre");
eventos.addEventListener("focus", function (event) {
  console.log("[focus] tienes el foco estas dentro ", String.fromCharCode(event.keyCode));
});
var eventos = document.querySelector("#nombre");
eventos.addEventListener("blur", function (event) {
  console.log("[blur] saliste de foco estas fuera ", String.fromCharCode(event.keyCode));
});
//comprobar disponibilidad de local estorage
'use strict'
if(typeof(localStorage !=='undefinided')){
  console.log('localstorage esta disponible')
}
else{
  console.log('localstorage no esta disponible')
}

