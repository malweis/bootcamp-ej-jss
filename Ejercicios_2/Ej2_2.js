const array = [];

for (let i = 0; i < 100; i++) {
  array.push(Math.floor(Math.random() * 61) - 30);
}

console.log("El array generado es: " + array);

let contador = {};

for (let i = 0; i < array.length; i++) {
  if (contador[array[i]]) {
    contador[array[i]]++;
  } else {
    contador[array[i]] = 1;
  }
}

let numMasRepetido;
let vecesRepetido = 0;

for (const num in contador) {
  if (contador[num] > vecesRepetido) {
    vecesRepetido = contador[num];
    numMasRepetido = num;
  }
}

console.log("El número que más se repite es: " + numMasRepetido + " y se repite un nro de " + contador[array[numMasRepetido]] + " veces ");

let numerosFaltantes = [];

for (let i = -30; i <= 30; i++) {
  if (!array.includes(i)) {
    numerosFaltantes.push(i);
  }
}

console.log("Los números que no están presentes son: " + numerosFaltantes);
