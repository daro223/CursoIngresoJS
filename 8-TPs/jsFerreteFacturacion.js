/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
var numUno;
var numDos;
var numTres;
var resultado;
numUno=document.getElementById('PrecioUno').value;
numDos=document.getElementById('PrecioDos').value;
numTres=document.getElementById('PrecioTres').value;
numUno=parseInt(numUno);
numDos=parseInt(numDos);
numTres=parseInt(numTres);
resultado=numUno+numDos+numTres;
resultado=parseInt(resultado);
alert(resultado);
}
function Promedio () 
{
var numUno;
var numDos;
var numTres;
var resultado;
numUno=document.getElementById('PrecioUno').value;
numDos=document.getElementById('PrecioDos').value;
numTres=document.getElementById('PrecioTres').value;
numUno=parseInt(numUno);
numDos=parseInt(numDos);
numTres=parseInt(numTres);
resultado=(numUno+numDos+numTres)/3;
resultado=parseInt(resultado);
alert(resultado);
}
function PrecioFinal () 
{
var numUno;
var numDos;
var numTres;
var resultado;
numUno=document.getElementById('PrecioUno').value;
numDos=document.getElementById('PrecioDos').value;
numTres=document.getElementById('PrecioTres').value;
numUno=parseInt(numUno);
numDos=parseInt(numDos);
numTres=parseInt(numTres);
resultado=(numUno+numDos+numTres)+numUno*0.21+numDos*0.21+numTres*0.21;
resultado=parseInt(resultado);
alert(resultado);

}