const pedido = document.getElementById("pedido");
const btnPago = document.getElementById("btnPago");
document.addEventListener('DOMContentLoaded', () => {
  stockProductos.forEach((producto) => {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let tdprecio = document.createElement("td");
    tr.classList.add("cartItem");
    td.classList.add("prodItem");
    tdprecio.classList.add("precioItem");
    td.innerHTML = `${producto.nombre}`;
    tdprecio.innerHTML = `${producto.precio}`;
    pedido.append(tr, td, tdprecio);
  })
});
btnPago.addEventListener("click", () => {
  Swal.fire({
    icon: 'success',
    title: 'Compra Finalizada'
  })
});
