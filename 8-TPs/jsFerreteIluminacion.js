/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas
están en oferta al mismo precio de $35 pesos final.


A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 

B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" 
se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.

C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" 
o "FelipeLamparas" se hace un descuento del 25 %
y si es de otra marca el descuento es del 20%.

D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz" 
el descuento es del 15%, si es  "FelipeLamparas"
se hace un descuento del 10 % y si es de otra marca un 5%.

E.	Si el importe final con descuento suma más de $120  
se debe sumar un 10% de ingresos brutos
en informar del impuesto con el siguiente mensaje:
”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
var Marca=document.getElementById('Marca').value;
var Cantidad=document.getElementById('Cantidad').value;
var precioDescuento;
Cantidad=parseInt(Cantidad);
var precio=Cantidad*35;

if(Cantidad<3)
{
	precioDescuento=precio;
}
if(Cantidad==3)
{
	switch(Marca)
	{
		case "ArgentinaLuz":
			precioDescuento=(precio-precio*0.15);
			break;
		case "FelipeLamparas":
			precioDescuento=(precio-precio*0.10);
			break;
		default:
			precioDescuento=(precio-precio*0.05);
			break;
	}
}
if(Cantidad==4)
{
	switch(Marca)
	{
		case "ArgentinaLuz":
			precioDescuento=(precio-precio*0.25);
			break;
		case "FelipeLamparas":
			precioDescuento=(precio-precio*0.25);
			break;
		default:
			precioDescuento=(precio-precio*0.20);
			break;
	}
}
if(Cantidad==5)
{
	switch(Marca)
	{
		case "ArgentinaLuz":
			precioDescuento=(precio-precio*0.40);
			break;
		default:
			precioDescuento=(precio-precio*0.30);
			break;
	}
}
if(Cantidad>5)
{
	precioDescuento=(precio-precio*0.50);
	
}
document.getElementById('precioDescuento').value=precioDescuento;
var impuesto;
if(precioDescuento>120)
{
	impuesto=precioDescuento*0.10+precioDescuento;
	alert("Usted pago "+impuesto+" de IIBB");
}
}
