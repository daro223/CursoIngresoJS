/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
var a;
var b;

a=document.getElementById('numeroUno').value;
b=document.getElementById('numeroDos').value;

a=parseInt(a)
b=parseInt(b)

var suma = a+b;

alert("el resultado de la suma es: "+suma);
}

function restar()
{
var a;
var b;

a=document.getElementById('numeroUno').value;
b=document.getElementById('numeroDos').value;

a=parseInt(a)
b=parseInt(b)

var resta = a-b;

alert("el resultado de la resta es: "+resta);;
}

function multiplicar()
{ 
var a;
var b;

a=document.getElementById('numeroUno').value;
b=document.getElementById('numeroDos').value;

a=parseInt(a)
b=parseInt(b)

var multiplicar = a*b;

alert("el resultado de la multiplicación es: "+multiplicar);;
}

function dividir()
{
var a;
var b;

a=document.getElementById('numeroUno').value;
b=document.getElementById('numeroDos').value;

a=parseInt(a)
b=parseInt(b)

var dividir = a/b;

alert("el resultado de la divisón es: "+dividir);;
}

