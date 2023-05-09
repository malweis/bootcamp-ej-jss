function esPalindromo(palabra) {
    const palabraSinEspacios = palabra.replace(/ /g, "").toLowerCase();
    const longitud = palabraSinEspacios.length;
    let contador = 0;
    for (let i = 0; i < longitud / 2; i++) {
      if (palabraSinEspacios[i] !== palabraSinEspacios[longitud - 1 - i]) {
        return false;
      }
      contador++;
    }
    console.log(contador)
    return true;
  }
  
  const palabra = "RADAR";
  
  if (esPalindromo(palabra)) {
    console.log(palabra + " es un palíndromo");
  } else {
    console.log(palabra + " no es un palíndromo");
  }
  