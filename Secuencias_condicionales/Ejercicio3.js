// Se inicializan las variables
let promedio = 0;
let sumaEdades = 0;
const cantidadPersonas = 5;
const mayoriaEdad = 18;

// Ingresar la edad de cinco personas
const edadPersona1 = parseFloat(prompt('Ingrese la edad de la 1ra persona'));
const edadPersona2 = parseFloat(prompt('Ingrese la edad de la 2da persona'));
const edadPersona3 = parseFloat(prompt('Ingrese la edad de la 3ra persona'));
const edadPersona4 = parseFloat(prompt('Ingrese la edad de la 4ta persona'));
const edadPersona5 = parseFloat(prompt('Ingrese la edad de la 5ta persona'));

// Calcular promedio de edades
promedio = (edadPersona1 + edadPersona2 + edadPersona3 + edadPersona4 + edadPersona5) / cantidadPersonas;

let acumulador;

if (promedio >= mayoriaEdad) {
    acumulador = edadPersona1 + edadPersona2 + edadPersona3 + edadPersona4 + edadPersona5;
    alert('La mayoría son mayores de edad');
} else {
    acumulador = edadPersona1 + edadPersona2 + edadPersona3 + edadPersona4 + edadPersona5;
    alert('La mayoría de personas son menores de edad');
}
