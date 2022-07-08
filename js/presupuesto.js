const pedido = document.getElementById("pedido");
const btnFinCompra = document.querySelector('#btnFinCompra');
document.addEventListener('DOMContentLoaded', () => {
  carritoCompras.forEach((producto) => {
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
})

btnFinCompra.addEventListener('click', () => {
  Swal.fire('Compra Finalizada');
})