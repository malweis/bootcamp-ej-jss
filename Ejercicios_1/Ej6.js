const IVA = 0.1;
let precio;

do {
  precio = prompt("Introduce el precio del producto");
} while (isNaN(precio));

precio = parseFloat(precio);

let precioFinal = precio * (1 + IVA);

console.log("El precio final con IVA es " + precioFinal);
