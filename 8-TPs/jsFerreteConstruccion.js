/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var Largo;
var Ancho;
var Rectangulo;
Largo=document.getElementById('Largo').value;
Ancho=document.getElementById('Ancho').value;
Largo=parseInt(Largo);
Ancho=parseInt(Ancho);
Rectangulo=(Largo*2+Ancho*2)*3;
alert(Rectangulo);
}
function Circulo () 
{
var Radio;
Radio=document.getElementById('Radio').value
Radio=parseInt(Radio)
Circulo=Radio*2*3.1415
alert(Circulo);
}
function Materiales () 
{
var Largo;
var Ancho;
var Rectangulo;
Largo=document.getElementById('Largo').value;
Ancho=document.getElementById('Ancho').value;
Largo=parseInt(Largo);
Ancho=parseInt(Ancho);
cemento=(Largo*Ancho)*2;
cal=(Largo*Ancho)*3;

alert(cemento+" bolsas de cemento "+cal+" bolsas de cal");

}