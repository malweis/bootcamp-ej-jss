function bubbleSort(a, n) {
  let sorted = true;
  for (let i = 0; i < n - 1; i++) {
    if (a[i] < a[i + 1]) {
      let t = a[i];
      a[i] = a[i + 1];
      a[i + 1] = t;
      sorted = false;
    }
  }
  if (sorted == false) {
    bubbleSort(a, n);
  } else {
    console.log("NiN");
  }
}

const cadena = "";
const array = [];
for (let i = 0; i < cadena.length; i++) {
  array.push(parseInt(cadena[i]));
}

let n = array.length;
bubbleSort(array, n);

if (n > 0) {
  console.log("Array ordenado : " + array.join(" "));
}
