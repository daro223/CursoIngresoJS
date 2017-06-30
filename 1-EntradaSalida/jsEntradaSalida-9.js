/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var a=prompt("ingrese sueldo");
document.getElementById('sueldo').value=a;
var b=10;
var c=parseInt(a)*parseInt(b)/parseInt(100);
var d=parseInt(a)+parseInt(c);
	
document.getElementById('resultado').value=d;
}
