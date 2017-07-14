/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
   var edad;
   var sexo;
   var estado;
   var sueldo;
   var legajo;
   var nacionalidad;

	//limita la edad entre 18 y 90, pero acepta negativos
	edad=prompt("Ingrese una edad entre 18 y 90 años.");
	while((edad>90||edad<18)==(/^([0-9])*$/.test(edad)))
	{
		alert("El valor '" + edad + "' no es valido.");
		edad=prompt("Ingrese una edad entre 18 y 90 años.");
	}
	validacion=document.getElementById('Edad').value=edad;		
	
	sexo=prompt("Ingrese 'f' para Femenino ó 'm' para masculino.")
	while(sexo!="f"&&sexo!="m")
	{
		alert("Usted no es hombre ni mujer.");
		sexo=prompt("Ingrese 'f' ó 'm'.");
	}	
	if(sexo=="f")
	{
		document.getElementById('Sexo').value="Femenino.";		
	}
	else
	{
		document.getElementById('Sexo').value="Masculino.";			
	}

	estado=prompt("Ingrese \n1-para soltero/a,\n2-para casado/a, \n3-para divorciado/a, \n4-para viudo/a.");
		/*Estado civil, 
		1-para soltero,
		2-para casados, 
		3-para divorciados y 
		4-para viudos */
	/*while((estado<1||estado>4)==(/^([0-9])*$/.test(estado)))
	{
		alert("Número incorrecto");
		estado=prompt("Ingrese \n1-para soltero/a,\n2-para casado/a, \n3-para divorciado/a, \n4-para viudo/a.");
	}*/
	switch(estado)
	{
		case 1:
		estado="Soltero/a";
		break;
		case 2:
		estado="casado/a";
		break;
		case 3:
		estado="divorciado/a";
		break;
		case 4:
		estado="viudo/a";
		break;
	}
	document.getElementById('EstadoCivil').value=estado;
	alert(estado);
}
