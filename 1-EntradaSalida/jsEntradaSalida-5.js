/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
var nombre =prompt("ingrese su nombre");
document.getElementById('elNombre').value=nombre;

var edad =prompt("ingrese su edad");
document.getElementById('laEdad').value=edad;

alert("Su nombre es "+nombre+" y su edad es "+edad)



}

