/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var a;
var b=10;

a=document.getElementById('sueldo').value;

a=parseInt(a)

var c=a*b/100;

c=parseInt(c)
var d=a+c;
	
document.getElementById('resultado').value=d;
}
