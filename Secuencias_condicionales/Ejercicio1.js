// Lee un numero entero del usuario
const numero = parseInt(prompt("Introduce un número entero"));

// Verifica si el numero es positivo
if (numero > 0) {
    console.log("El número es positivo");
} 
// verifica si el numero es cero
else if (numero === 0) {
    console.log("El número es cero");   
} 
// verifica si el numero es negativo
else {
    console.log("El número es negativo");
}