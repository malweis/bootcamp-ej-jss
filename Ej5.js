let num;

do {
  num = prompt("Introduce un número");
} while (isNaN(num));

num = parseFloat(num);

if (num % 2 === 0) {
  console.log(num + " es divisible entre 2");
} else {
  console.log(num + " no es divisible entre 2");
}
