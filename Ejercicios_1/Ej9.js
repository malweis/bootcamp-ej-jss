const password = "password";
let intentos = 0;
let respuesta;

do {
  respuesta = prompt("Introduce la contraseña");
  intentos++;
} while (respuesta !== password && intentos < 3);

if (respuesta === password) {
  console.log("¡Correcto!");
} else {
  console.log("Fallaste jaja!!");
}
