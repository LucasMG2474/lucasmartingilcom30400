const pass = "1234";
let intentosFallidos = 0;
let nombreUsuario = prompt("Ingrese su nombre");
let passValido = false;
while (!passValido) {
  let passIngresado = prompt("Ingrese su contraseña");
  if (passIngresado === pass) {
    alert("Bienvenido al cotizador de PC " + nombreUsuario);
    passValido = true;
    let cotizador = prompt("ARME SU PC AHORA!!!, Si esta listo presione S, sino escriba ESC");
    while (cotizador.toUpperCase() != "ESC") {
      let tipodeEquipo = prompt("Elija un procesador AMD $23000 o INTEL $21000?");
      let placaMadre = prompt(" Elija una Placa Madre enter ASUS $8400 y GYGABYTE $14000 ");
      let memoriaRam = prompt("Elija una memoria entre KINGSTON $7000 y CORSAIR $5000");
      let tipoDisco = prompt("Elija un tipo de disco rígido entre HD $5600 $ y SSD $6500");

      if (tipodeEquipo.toUpperCase() === "AMD") {
        precioEquipo = 23000;
      } else if (tipodeEquipo.toUpperCase() === "INTEL") {
        precioEquipo = 21000;
      }

      if (placaMadre.toUpperCase() === "ASUS") {
        precioPlaca = 8400;
      } else if (placaMadre.toUpperCase() === "GYGABYTE") {
        precioPlaca = 14000;
      }

      if (memoriaRam.toUpperCase() === "KINGSTON") {
        precioMemoria = 7000;
      } else if (memoriaRam.toUpperCase() === "CORSAIR") {
        precioMemoria = 5000;
      }

      if (tipoDisco.toUpperCase() === "HD") {
        precioDisco = 5600;
      } else if (tipoDisco.toUpperCase() === "SSD") {
        precioDisco = 6500;
      }

      function cotizar(procesador, placaM, memoria, disco) {
        let totalCotizacion = procesador + placaM + memoria + disco;
        return totalCotizacion;
      }

      let presupuestoFinal = cotizar(precioEquipo, precioPlaca, precioMemoria, precioDisco);
      alert(`Sr. ${nombreUsuario} Ud. armó siguiente equipo: \n Procesador: ${tipodeEquipo} \n Placa Madre: ${placaMadre} \n Memoria: ${memoriaRam} \n Disco: ${tipoDisco}`);
      alert(`Su equipo armado tiene un costo de $ ${presupuestoFinal}`);
      let salirCotizador = prompt("Desea Confirmar la compra? S/N");
      if (salirCotizador.toUpperCase() === "S") {
        cotizador = prompt("MUCHAS GRACIAS! POR SU COMPRA, para salir escriba ESC");
      } else {
        cotizador = prompt("GRACIAS POR VISITARNOS, para salir escriba ESC");
      }
    }
  } else {
    alert("Contraseña Incorrecta");
    intentosFallidos += 1;
  }
  if (intentosFallidos === 3) {
    alert("Lo sebtimos, llego al límite de intentos");
    passValido = true;
  }
}
