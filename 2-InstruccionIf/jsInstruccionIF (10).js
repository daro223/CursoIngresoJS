function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var random;

random=Math.floor((Math.random()*10)+1);

console.log(random);

if(random>8)
{
	alert("Exelente ");
}
else
{
	if(random<4)
	{
		alert("Vamos la proxima se puede ");
	}
	else
	{
		alert("Aprobo ");
	}
}

}//FIN DE LA FUNCIÓN