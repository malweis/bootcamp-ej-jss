function bubbleSort(a, n, contador = 0) {
  let sorted = true;
  for (let i = 0; i < n - 1; i++) {
    if (a[i] < a[i + 1]) {
      let t = a[i];
      a[i] = a[i + 1];
      a[i + 1] = t;
      sorted = false;
      contador++;
    }
  }
  if (sorted == false) {
    bubbleSort(a, n, contador);
  } else {
    if (contador > 1) {
      console.log("Array ordenado : " + a.join(" "));
    } else {
      console.log("NiNs");
    }
  }
}

const cadena = "3334";
const array = [];
for (let i = 0; i < cadena.length; i++) {
  array.push(parseInt(cadena[i]));
}

let n = array.length;
bubbleSort(array, n);
