/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
var a=prompt("ingrese importe");
document.getElementById('importe').value=a;
var b=25;
var c=parseInt(a)*parseInt(b)/parseInt(100);
var d=parseInt(a)-parseInt(c);
	
document.getElementById('resultado').value=d;
}
