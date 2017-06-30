/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
var a = prompt("ingrese un primer número");
document.getElementById('numeroUno').value=a;
var b = prompt("ingrese un segundo número");
document.getElementById('numeroDos').value=b;
var suma = parseInt(a) + parseInt(b);

alert("el resultado de la suma es: "+suma);

}

