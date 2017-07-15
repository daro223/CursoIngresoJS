 	function Mostrar()
{
	
/*
Ejemplo de obtenciòn, validación y extracción de información de esta encuenta se debe informar
1) cuantas mujeres y cuantos homres fueron entrevistados
2) la persona de mayor edad
3) el promedio de edad
4) quien ganara las elecciones (gobierno.oposicion.otro)
5) informar cuantas mujeres mayores de edad hay
6) informar cuantos hombres menores a 30 años hay
7) informar la altura del hombre que menos edad tiene
8) informar cuantos hombres votaron a otro
9) que las mujeres informar cuantas votaron a la oposicion
10) cuantas personas de 50 años votaron
11) cuantas personas de 50 años mujeres votaron
12) cuantas personas de 50 años de mas de 1 metro votaron al gobierno


	var contador=0;
	//declarar contadores y variables 
	var respuesta="si";

*/

	var sexo;
	var mensaje;
	var contadorMasc=0;
	var contadorFem=0;
	var edad;
	var respuesta="si";

	//sexo=prompt("Ingresar sexo \n'm' para masculino\n'f' para femenino.");
	while(respuesta=="si")
	{



	//pido datos y valido
		sexo=prompt("Ingresar sexo \n'm' para masculino\n'f' para femenino.");
		while(sexo!="f"&&sexo!="m")
		{	
			alert("Usted no es hombre ni mujer.");
			sexo=prompt("Ingrese 'f' ó 'm'.");
		}


		edad=prompt("Ingrese edad");
		while(!(edad>0 && edad<100))
		{
			alert("El valor '" + edad + "' no es valido.");
			edad=prompt("Ingrese una edad entre 0 y 100 años.");
		}



	//Logica




		if(sexo="f")
		{
			contadorFem+=1;
		}
		else
		{
			contadorMasc+=1;
		}




		
	mensaje=confirm("¿Desea confirmar datos?");
	if(mensaje)
		{
			respuesta="no";
		}
	else
		{	
			respuesta="si";
		}

	}






}//FIN DE LA FUNCIÓN