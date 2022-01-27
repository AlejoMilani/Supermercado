let producto1: string = prompt("Ingresa un producto");
let precioP1: number = Number(
  prompt("Ingresa el precio por unidad del producto")
);
let cantidadP1: number = Number(prompt("Ingresa el stock del producto"));
let producto2: string = prompt("Ingresa un producto");
let precioP2: number = Number(
  prompt("Ingresa el precio por unidad del producto")
);
let cantidadP2: number = Number(prompt("Ingresa el stock del producto"));
let producto3: string = prompt("Ingresa un producto");
let precioP3: number = Number(
  prompt("Ingresa el precio por unidad del producto")
);
let cantidadP3: number = Number(prompt("Ingresa el stock del producto"));

console.log("Bienvenido al Mercado Dia");

console.log(
  "El",
  producto1,
  "tiene un precio de",
  precioP1,
  "y hay",
  cantidadP1,
  "unidades"
);
console.log(
  "El",
  producto2,
  "tiene un precio de",
  precioP2,
  "y hay",
  cantidadP2,
  "unidades"
);
console.log(
  "El",
  producto3,
  "tiene un precio de",
  precioP3,
  "y hay",
  cantidadP3,
  "unidades"
);

let compra: number = Number(
  prompt(
    "Ingresa 1 para comprar " +
      producto1 +
      ", Ingresa 2 para comprar " +
      producto2 +
      ", Ingresa 3 para comprar " +
      producto3
  )
);

let cantidadCompra: number = Number(
  prompt("Cuanto productos quieres comprar?")
);

switch (compra) {
  case 1:
    console.log("El precio a pagar es", precioP1 * cantidadCompra, "pesos");
    console.log(
      "Quedan",
      cantidadP1 - cantidadCompra,
      "unidades restantes de",
      producto1
    );
    break;
  case 2:
    console.log("El precio a pagar es", precioP2 * cantidadCompra, "pesos");
    console.log(
      "Quedan",
      cantidadP2 - cantidadCompra,
      "unidades restantes de",
      producto2
    );
    break;
  case 3:
    console.log("El precio a pagar es", precioP3 * cantidadCompra, "pesos");
    console.log(
      "Quedan",
      cantidadP3 - cantidadCompra,
      "unidades restantes de",
      producto3
    );
    break;
}
