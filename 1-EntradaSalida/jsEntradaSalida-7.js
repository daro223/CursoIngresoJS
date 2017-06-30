/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var a = prompt("ingrese un primer número");
document.getElementById('numeroUno').value=a;
var b = prompt("ingrese un segundo número");
document.getElementById('numeroDos').value=b;
var suma = parseInt(a) + parseInt(b);

alert("el resultado de la suma es: "+suma);
}

function restar()
{
	var a = prompt("ingrese un primer número");
document.getElementById('numeroUno').value=a;
var b = prompt("ingrese un segundo número");
document.getElementById('numeroDos').value=b;
var resta = parseInt(a) - parseInt(b);

alert("el resultado de la resta es: "+resta);
}

function multiplicar()
{ 
	var a = prompt("ingrese un primer número");
document.getElementById('numeroUno').value=a;
var b = prompt("ingrese un segundo número");
document.getElementById('numeroDos').value=b;
var multiplicar = parseInt(a) * parseInt(b);

alert("el resultado de la multiplicación es: "+multiplicar);
}

function dividir()
{
	var a = prompt("ingrese un primer número");
document.getElementById('numeroUno').value=a;
var b = prompt("ingrese un segundo número");
document.getElementById('numeroDos').value=b;
var dividir = parseInt(a) / parseInt(b);

alert("el resultado de la divición es: "+dividir);
}

