let num;

do {
  num = prompt("Introduce un número mayor o igual que cero");
} while (isNaN(num) || num < 0);

console.log("El número introducido es " + num);
