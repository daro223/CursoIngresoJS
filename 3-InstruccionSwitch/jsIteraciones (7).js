function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;



	while(respuesta=="si")
	{
		contador= contador+1;
		numero= prompt("Ingrese "+contador+"º número");
		numero= parseInt(numero);
		acumulador= acumulador+numero;
		respuesta=prompt("Ingrese 'si' para continuar, 'no' para finalizar");

				
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN