let dia;

do {
  dia = prompt("Introduce un día de la semana (o escribe 'salir' para terminar)");

  switch (dia) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
      console.log("Es un día laboral");
      break;
    case "sabado":
    case "domingo":
      console.log("No es un día laboral");
      break;
    case "salir":
      console.log("Saliendo del programa...");
      break;
    default:
      console.log("Ese día no existe");
      break;
  }
} while (dia !== "salir");
