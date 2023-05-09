function esPalindromo(palabra, contadors) {
    const palabraSinEspacios = palabra.replace(/ /g, "").toLowerCase();
    const longitud = palabraSinEspacios.length;
    
    let contador = {};
    for (let i = 0; i < longitud; i++) {
      if (palabraSinEspacios[i] == palabraSinEspacios[i]) {
        if (contador[palabraSinEspacios[i]]) {
            contador[palabraSinEspacios[i]]++;
          } else {
            contador[palabraSinEspacios[i]] = 1;
          }
      }
     
    }
   
    return contador;
  }
  let contador = {};
  const palabra = "aaabbbcccss";
  
    contador = esPalindromo(palabra, contador);

   
    console.log("se repite un nro de " + Object.keys(contador).length) + "letras";
console.log(contador);
 
   
  