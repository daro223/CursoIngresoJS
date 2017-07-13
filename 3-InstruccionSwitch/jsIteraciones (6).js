function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;



	while(contador<5)
	{
		contador= contador+1;
		numero= prompt("Ingrese "+contador+"º número");
		numero= parseInt(numero);
		acumulador= acumulador+numero;

				
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN