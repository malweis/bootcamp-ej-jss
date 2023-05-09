let num1, num2;

do {
  num1 = prompt("Introduce un número");
} while (isNaN(num1));

do {
  num2 = prompt("Introduce otro número");
} while (isNaN(num2));

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (num1 > num2) {
  console.log(num1 + " es mayor que " + num2);
} else if (num1 < num2) {
  console.log(num2 + " es mayor que " + num1);
} else {
  console.log("Los números son iguales");
}
