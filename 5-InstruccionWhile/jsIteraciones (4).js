function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	var validacion;

	while(numero>9||numero<=0)
	{
		alert("incorrecto");
		numero=prompt("ingrese un número entre 0 y 10");
	}
	alert("correcto");
	validacion=document.getElementById('Numero').value=numero;
}//FIN DE LA FUNCIÓN