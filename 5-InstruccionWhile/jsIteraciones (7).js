function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	var mensaje;


	while(respuesta=="si")
	{
		contador= contador+1;
		numero= prompt("Ingrese "+contador+"º número");
		numero= parseInt(numero);
		acumulador= acumulador+numero;
		mensaje=confirm("usted desesa continuar?");
		if(mensaje)
		{
			respuesta="si";
		}
		else
		{
			respuesta="no";
		}

				
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN