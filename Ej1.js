let num1, num2;

do {
  num1 = prompt("Introduce un número");
} while (isNaN(num1));

do {
  num2 = prompt("Introduce otro número");
} while (isNaN(num2));

num1 = parseFloat(num1);
num2 = parseFloat(num2);

console.log(num1 + num2); // suma
console.log(num1 - num2); // resta
console.log(num1 * num2); // multiplicación
console.log(num1 / num2); // división
console.log(num1 % num2); // módulo
