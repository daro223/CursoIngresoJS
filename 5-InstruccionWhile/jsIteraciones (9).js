function Mostrar()
{

	/*var contador=0;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		
	
	}*/
	var contador=0;
	var nota;
	var notamayor;
	var notamenor;

	while(contador<5)
	{
		contador+=1;
		nota=prompt("ingrese numero");
		nota=parseInt(nota);
		console.log("vuelta "+contador);
		if(contador==1)
		{
			notamayor=nota;
			notamenor=nota;
		}
		else 
		{
			if(nota>notamayor)
			{
				notamayor=nota;
			}
			if(nota<notamenor)
			{
				notamenor=nota;
			}
		}
	}
	console.log(notamayor);
	console.log(notamenor);

	document.getElementById('maximo').value=notamayor;
	document.getElementById('minimo').value=notamenor;



}//FIN DE LA FUNCIÓN