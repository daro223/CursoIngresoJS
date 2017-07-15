function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var mensaje;
	var respuesta="si";

	while(respuesta=="si")
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		if(numero<0)
		{
			negativo=negativo*numero;
		}
		else
		{
			positivo=positivo+numero;
		}
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


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN