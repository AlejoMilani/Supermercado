let prodUno: string = "";
let prodDos: String = "";
let prodTres: String = "";
let stockUno: number = 0;
let stockDos: number = 0;
let stockTres: number = 0;
let precioUno: number = 0;
let precioDos: number = 0;
let precioTres: number = 0;
let compra: string = "";
let cantidad: number = 0;

function productos() {
  prodUno = String(prompt("ingrese el producto uno"));
  prodDos = String(prompt("ingrese el producto dos"));
  prodTres = String(prompt("ingrese el producto tres"));
  stockUno = Number(prompt("ingrese el stock de " + prodUno));
  stockDos = Number(prompt("ingrese el stock de " + prodDos));
  stockTres = Number(prompt("ingrese el stock de " + prodTres));
  precioUno = Number(prompt("ingrese el precio de " + prodUno));
  precioDos = Number(prompt("ingrese el precio de " + prodDos));
  precioTres = Number(prompt("ingrese el precio de " + prodTres));
}

function compraDeUnProducto(
  producto: string,
  stock: number,
  precio: number
): number {
  if (stock > 0 && precio > 0) {
    stock = stock - 1;
    console.log(
      "el precio de " +
        producto +
        "es de $" +
        precio +
        " y el stock es de " +
        stock
    );
  } else {
    console.log("el stock o precio ingresados son menores o igual a cero");
  }
  return stock;
}

function comprar(): void {
  while (cantidad <= 0) {
    cantidad = Number(prompt("que cantidad desea comprar?"));
  }
  for (let i: number = 0; i < cantidad; i++) {
    compra = String(prompt("que producto desea comprar?"));

    switch (true) {
      case compra === prodUno && cantidad <= stockUno:
        stockUno = compraDeUnProducto(prodUno, stockUno, precioUno);
        break;
      case compra === prodDos && cantidad <= stockDos:
        stockDos = compraDeUnProducto(prodDos, stockDos, precioDos);
        break;
      case compra === prodTres && cantidad <= stockTres:
        stockTres = compraDeUnProducto(prodTres, stockTres, precioTres);
        break;
      default:
        console.log(`no tenemos ese producto (${compra})`);
    }
  }
}

const presentacion = () => {
  console.log("Bienvenido al Super");
  console.log(
    "los productos son: " +
      prodUno +
      " $" +
      precioUno +
      "," +
      prodDos +
      " $" +
      precioDos +
      ", " +
      prodTres +
      " $" +
      precioTres
  );
};

productos();

presentacion();

setTimeout(() => {
  comprar();
}, 0);