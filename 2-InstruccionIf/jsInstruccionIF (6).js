function Mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById('edad').value;

	/*if(edad>17)
	{
		alert("Mayor de edad");
	}
	else if(edad<13)
	{
		alert("Niño");
	}
	else
	{
		alert("Adolecente");
	}*/

	if(edad>17)
	{
		Alert("Mayor de edad");
	}
	else
	{
		if(edad<13)
		{
			Alert("Menor de edad");
		}
		else
		{
			Alert("Adolescente");
		}
	}


}//FIN DE LA FUNCIÓN