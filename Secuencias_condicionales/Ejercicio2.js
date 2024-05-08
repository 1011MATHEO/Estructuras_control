// Obtén la entrada del usuario para los números y la selección del operador
let operador = prompt('Que operacion desea hacer: 1- sumar || 2- Resta || 3 multiplicar || 4 - dividir');
const numero1=parseFloat(prompt('Ingresa numero'));
const numero2=parseFloat(prompt('Ingresa el segundo numero'));
let total;

if (operador == 1){
  total = numero1 + numero2
  alert('el resultado de la Suma es de' +total)
}else if (operador == 2){
  total = numero1-numero2
  alert('el resultado de la Resta es de' +total)
}else if (operador == 3){
  total = numero1*numero2
  alert('El resultado de la Multiplicacion es de '+total)
}else if (operador == 4){
  total = numero1/numero2
  alert('el resultado de la Divisio es de '+total)
}else{
  alert('opcion de operacion incorrecta')
}