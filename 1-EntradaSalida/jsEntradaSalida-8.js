/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
var a;
var b;

a=document.getElementById('numeroDividendo').value;
b=document.getElementById('numeroDivisor').value;

a=parseInt(a)
b=parseInt(b)

var resto =a%b;
	
alert("El resto es: "+resto);
}
