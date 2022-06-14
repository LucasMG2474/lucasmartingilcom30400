class Usuario {
  constructor(nombreUsr, clave) {
    this.nombreUsr = nombreUsr;
    this.clave = clave;
  }
}
let registro = [];
let regUsuario = prompt("cree un nombre de usuario");
let claveUsuario = prompt("cree un clave");
let passValido = false;
const login = new Usuario(`${regUsuario}`, `${claveUsuario}`);
registro.push(login.nombreUsr);
registro.push(login.clave);
do {
  let nombreDelusuario = prompt("Ingrese su usuario");
  let claveDelusuario = prompt("Ingrese su clave");
  if (nombreDelusuario === registro[0] && claveDelusuario === registro[1]) {
    alert(`Bienvenido ${nombreDelusuario}`);
    passValido = true;
  } else {
    alert("Usuario o clave incorrectas");
  }
} while (!passValido);

const microProcesador = [
  { nombre: 'amd', precio: 23000, stock: 50 },
  { nombre: 'intel', precio: 21000, stock: 50 }
]
const placaMadre = [
  { nombre: 'asus', precio: 14000, stock: 50 },
  { nombre: 'gigabyte', precio: 8400, stock: 50 }
]
const memoriaRam = [
  { nombre: 'kingston', precio: 7000, stock: 50 },
  { nombre: 'corsair', precio: 5000, stock: 50 }
]
const tipoDisco = [
  { nombre: 'hd', precio: 5600, stock: 50 },
  { nombre: 'ssd', precio: 6500, stock: 50 }
]
const tipoGabinete = [
  { nombre: 'sentey', precio: 5000, stock: 50 },
  { nombre: 'aerocool', precio: 6000, stock: 50 }
]

class Productoagregado {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

let precioNuevoProducto = 0;
let precioNuevoProducto2 = 0;
let precioNuevoProducto3 = 0;
let equipoArmado = [];

let tipodeEquipo = prompt("Qué tipo de equipo necesita, con procesador amd $23000 o intel $21000?");
let placaM = prompt(" Elija una Placa Madre enter asus $14000 y gygabyte $8400");
let memoria = prompt("Elija una memoria entre kingston $7000 y corsair $5000");
let disco = prompt("Elija un tipo de disco rígido entre hd $5600 $ y ssd $6500");
let gabinete = prompt("Elija el gabinete para su equipo entre sentey $5000 y aerocool $ 6000");

if (tipodeEquipo === 'amd') {
  precioEquipo = microProcesador[0].precio;
  equipoArmado.push(microProcesador[0].nombre.toUpperCase());
} else if (tipodeEquipo === 'intel') {
  precioEquipo = microProcesador[1].precio;
  equipoArmado.push(microProcesador[1].nombre.toUpperCase());
}

if (placaM === 'asus') {
  precioPlaca = placaMadre[0].precio;
  equipoArmado.push(placaMadre[0].nombre.toUpperCase());
} else if (placaM === 'gygabyte') {
  precioPlaca = placaMadre[1].precio;
  equipoArmado.push(placaMadre[1].nombre.toUpperCase());
}

if (memoria === 'kingston') {
  precioMemoria = memoriaRam[0].precio;
  equipoArmado.push(memoriaRam[0].nombre.toUpperCase());
} else if (memoria === 'corsair') {
  precioMemoria = memoriaRam[1].precio;
  equipoArmado.push(memoriaRam[1].nombre.toUpperCase());
}

if (disco === 'hd') {
  precioDisco = tipoDisco[0].precio;
  equipoArmado.push(tipoDisco[0].nombre.toUpperCase());
} else if (disco === 'ssd') {
  precioDisco = tipoDisco[1].precio;
  equipoArmado.push(tipoDisco[1].nombre.toUpperCase());
}

if (gabinete === 'sentey') {
  precioGabinete = tipoGabinete[0].precio;
  equipoArmado.push(tipoGabinete[0].nombre.toUpperCase());
} else if (gabinete === 'aerocool') {
  precioGabinete = tipoGabinete[1].precio;
  equipoArmado.push(tipoGabinete[1].nombre.toUpperCase());
}

alert("Su equipo es: " + equipoArmado.join("\n"));

let agregaProducto = prompt("Desea añadir otro producto SI/NO");

while (agregaProducto.toUpperCase() === "SI") {
  let nombreNuevoProducto = prompt("Elija (1) Teclado $2000 / (2) Monitor $30000 / (3) Mouse $ 2500");
  switch (nombreNuevoProducto) {
    case "1":
      const nuevoProducto = new Productoagregado("Teclado", 2000);
      precioNuevoProducto = nuevoProducto.precio;
      equipoArmado.push(nuevoProducto.nombre.toUpperCase());
      alert("Su equipo es: " + equipoArmado.join("\n"));
      break;
    case "2":
      const nuevoProducto2 = new Productoagregado("Monitor", 30000);
      precioNuevoProducto2 = nuevoProducto2.precio;
      equipoArmado.push(nuevoProducto2.nombre.toUpperCase());
      alert("Su equipo es: " + equipoArmado.join("\n"));
      break;
    case "3":
      const nuevoProducto3 = new Productoagregado("Mouse", 2500);
      precioNuevoProducto3 = nuevoProducto3.precio;
      equipoArmado.push(nuevoProducto3.nombre.toUpperCase());
      alert("Su equipo es: " + equipoArmado.join("\n"));
      break;
    default:
      alert("No tenemos disponibilidad de ese producto");
      break;
  }
  agregaProducto = prompt("Desea añadir otro producto SI/NO");
}
function cotizar(procesador, placaMAdre, memoriaRam, disco, gabinete, nuevoProducto1, nuevoProducto2, nuevoProducto3) {
  return totalCotizacion = procesador + placaMAdre + memoriaRam + disco + gabinete + nuevoProducto1 + nuevoProducto2 + nuevoProducto3;
}
cotizar(precioEquipo, precioPlaca, precioMemoria, precioDisco, precioGabinete, precioNuevoProducto, precioNuevoProducto2, precioNuevoProducto3);
alert(`Sr. ${registro[0]} su equipo tiene un costo de $ ${totalCotizacion}`);
let confirmaPedido = prompt("Desea confirmar su pedido SI/NO");
if (confirmaPedido.toUpperCase() === "SI") {
  alert("Pedido Confirmado, MUCHAS GRACIAS POR SU COMPARA");
} else {
  alert("Gracias, por visitarnos");
}