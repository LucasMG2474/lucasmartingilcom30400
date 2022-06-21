const contenedorProductos = document.getElementById('contenedor-productos')
let nombreCliente = prompt("Ingrese su nombre");
const titulo = document.getElementById('titulo');
titulo.innerHTML = `${nombreCliente} ARMATU PC!!`;

mostrarProductos(stockProductos);

function mostrarProductos(array) {

  array.forEach((producto) => {
    let div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
                <img src =${producto.img} alt="">
                <h3>${producto.nombre}</h3>
                <p class="precioProducto">Precio: $${producto.precio}</p>
                `
    contenedorProductos.appendChild(div)
  })
}
