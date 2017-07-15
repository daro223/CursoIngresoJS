function Mostrar()
{

	var sexo = prompt("ingrese f ó m .");

	while(sexo!="f"&&sexo!="m")
	{
		alert("Usted no es hombre ni mujer.");
		sexo=prompt("ingrese f ó m .");
	}

	if(sexo=="f")
	{
	document.getElementById('Sexo').value="El sexo es Femenino";		
	}
	else
	{
	document.getElementById('Sexo').value="El sexo es Masculino";			
	}


}//FIN DE LA FUNCIÓN