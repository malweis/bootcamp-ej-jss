const array = [];

for (let i = 0; i < 10; i++) {
  array.push(Math.floor(Math.random() * 11) - 5);
}

console.log("El array generado es: " + array);

let max = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}

console.log("El mayor elemento del array es: " + max);
