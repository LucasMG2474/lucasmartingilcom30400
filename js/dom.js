const contenedorProductos = document.getElementById('contenedor-productos');
const titulo = document.getElementById('titulo');
const selecTipoDeProd = document.getElementById('selecTipoDeProd');
const buscador = document.getElementById('buscadorProductos');
const btnFinCompras = document.getElementById('btnFinCompras');

titulo.innerHTML = 'ARMA TU PC!!';

selecTipoDeProd.addEventListener('change', () => {
  selecTipoDeProd.value == 'all' ? mostrarProductos(stockProductos) : mostrarProductos(stockProductos.filter(el => el.tipoDeProduccto == selecTipoDeProd.value));
})

buscador.addEventListener('change', () => {
  buscador.value == '' ? mostrarProductos(stockProductos) : mostrarProductos(stockProductos.filter(el => el.nombre == buscador.value));
})

mostrarProductos(stockProductos);

function mostrarProductos(array) {
  contenedorProductos.innerHTML = ""
  array.forEach((producto) => {
    let div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src =${producto.img} alt="">
    <h3>${producto.nombre}</h3>
    <p class="productos">Tipo: ${producto.tipoDeProduccto}</p>
    <p class="productos">Precio: $${producto.precio}</p>
    <button onclick=agregarAlCarrito(${producto.id}) class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
                `
    contenedorProductos.appendChild(div)
  })
}

function agregarAlCarrito(id) {
  const productoElegido = stockProductos.find(el => el.id == id)
  if (productoElegido) {
    carritoCompras.push(productoElegido)
  }
  actualizarCarrito()
  localStorage.setItem('carritoLS', JSON.stringify(carritoCompras))
}

function eliminarProducto(id) {
  const productoEliminar = carritoCompras.find(el => el.id == id)
  const indice = carritoCompras.indexOf(productoEliminar)
  carritoCompras.splice(indice, 1)
  actualizarCarrito()
  localStorage.setItem('carritoLS', JSON.stringify(carritoCompras))
}

function actualizarCarrito() {
  const contenedorCarrito = document.getElementById('carrito-contenedor')
  const precioTotal = document.getElementById('precioTotal')
  const contadorCarrrito = document.getElementById('contadorCarrito')

  contenedorCarrito.innerHTML = ''

  carritoCompras.forEach((producto) => {
    contenedorCarrito.innerHTML += `
    <div class="productoEnCarrito">
    <p>${producto.nombre}</p>
    <p>Precio: $${producto.precio}</p>
    <button onclick=eliminarProducto(${producto.id})  class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
    `
  })

  precioTotal.innerText = carritoCompras.reduce((acc, el) => acc += el.precio, 0)
  contadorCarrrito.innerText = carritoCompras.length
}

let carritoCompras = []

function recuperar() {
  let recuperarDeLocalS = JSON.parse(localStorage.getItem('carritoLS'));
  if (recuperarDeLocalS) {
    recuperarDeLocalS.forEach(el => {
      carritoCompras.push(el)
      actualizarCarrito()
    })
  }
}

recuperar();

btnFinCompras.addEventListener('click', () => {
  Swal.fire({
    icon: 'success',
    title: 'Compra Finalizada'
  })
});
