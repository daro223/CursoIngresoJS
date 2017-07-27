function Mostrar()
{
	contador=1
	respuesta="SI"
	for( ;respuesta=="SI" ; )
	{
		console.log("Hola " + contador);
		if(contador==10)
		{
			break;
		}
		contador++;
		respuesta=prompt();


	}




}