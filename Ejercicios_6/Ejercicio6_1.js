function bubbleSort(a, n, primero, segundo) {
  let pivot = 0;
  let contador= 0 ;
  for (let i = 0; i < n - 1; i++) {
    if (a[i] < a[i + 1]) {
       primero = a.slice(0, i)
       segundo = a.slice(i)
       pivot = a[i]
       contador++
    }
  }
  if(contador < 1){
    return null
  }
  var mm = null, mmi = null;
  for (var i = 0; i < segundo.length; i++) {
    if (segundo[i] > pivot) {
      if (mm == null || segundo[i] < mm) {
        mm = segundo[i];
        mmi = i;
      }
    }
  }
  if (mmi == null) return null;

  segundo.splice(mmi, 1);
  
  segundo = segundo.sort();


  var ret = +primero.concat([mm]).concat(segundo).join('');
  console.log(ret)
  if (ret < n) return null;
    console.log(primero)
    console.log(segundo)
    console.log(pivot)
   
 
}

const cadena = "2034";
const array = [];
var result =[];
var primero = [];
var segundo = [];
for (let i = 0; i < cadena.length; i++) {
  array.push(parseInt(cadena[i]));
}

let n = array.length;
result = bubbleSort(array, n);

console.log(result);



  