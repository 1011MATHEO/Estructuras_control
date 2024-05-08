// Ingresa un número del 1 al 20
let min = 1;
let max = 20;
let aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
let nombre = prompt('Bienvenido adivina un número del 1 al 20. ¿Cuál es tu nombre?');
let numero;

// Tiene cinco intentos para adivinar el número
let intentos = 0;
while (intentos < 5) {
    numero = parseInt(prompt(nombre + ', ingresa un número entre el ' + min + ' y el ' + max));

    if (numero >= min && numero <= max) {
        if (numero < aleatorio) {
            alert('El número que ingresaste es más bajo');
        } else if (numero > aleatorio) {
            alert('El número que ingresaste es más alto');
        } else if (numero === aleatorio) {
            break;
        }
        intentos++;
    } else {
        alert('Debes ingresar un número entre ' + min + ' y ' + max);
    }
}
if (numero === aleatorio) {
    alert('¡Felicidades ' + nombre + ', adivinaste el número en ' + (intentos + 1) + ' intentos!');
} else {
    alert('Agotaste el número de intentos, suerte para la próxima, ' + nombre + '!');
}