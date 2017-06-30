/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
var a = prompt("ingrese un primer número");
document.getElementById('numeroDividendo').value=a;
var b = prompt("ingrese un segundo número");
document.getElementById('numeroDivisor').value=b;
var dividir = parseInt(a) / parseInt(b);
var resto =parseInt(a)%parseInt(b);
	
alert("el resultado de la divición es: "+dividir+" el resto es: "+resto);
}
