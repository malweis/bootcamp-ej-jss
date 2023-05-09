function calcularSumaCuadratica(a, b, c) {
    const aux = b ** 2 - 4 * a * c;
    if (aux < 0) {
      return "Tiene que ser positiva";
    }
    const raiz = Math.sqrt(aux);
    const raizCuadratica = (-b + raiz) / (2 * a);
    return raizCuadratica;
  }
  console.log(calcularSumaCuadratica(20,45, 6));


  function calcularRestaCuadratica(a, b, c) {
    const aux = b ** 2 - 4 * a * c;
    if (aux < 0) {
      return "Tiene que ser positiva";
    }
    const raiz = Math.sqrt(aux);
    const raizCuadratica = (-b - raiz) / (2 * a);
    return raizCuadratica;
  }
  console.log(calcularRestaCuadratica(20,45, 6));