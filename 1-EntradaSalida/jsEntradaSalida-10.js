/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
var a;
//var b=25;

a=document.getElementById('importe').value;

a=parseInt(a);

//var c=a*b/100;
var c=a*1.25

//c=parseInt(c);

//var d=a-c;
	
document.getElementById('resultado').value=c;
}
