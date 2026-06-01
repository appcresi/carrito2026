const productos = [
  {
    id: 1,
    nombre: "Coca-Cola 500ml",
    imagen: "tele.jpg",
    descripcion: "Gaseosa Coca-Cola de 500ml bien fría.",
    precio: 1800,
    stock: 25
  },
  {
    id: 2,
    nombre: "Papas Lays Clásicas",
    imagen: "tele.jpg",
    descripcion: "Papas fritas sabor clásico en paquete mediano.",
    precio: 1500,
    stock: 18
  },
  {
    id: 3,
    nombre: "Alfajor Oreo",
    imagen: "tele.jpg",
    descripcion: "Alfajor relleno con crema sabor vainilla.",
    precio: 1200,
    stock: 30
  },
  {
    id: 4,
    nombre: "Agua Mineral 1.5L",
    imagen: "tele.jpg",
    descripcion: "Botella de agua mineral sin gas.",
    precio: 1400,
    stock: 20
  },
  {
    id: 5,
    nombre: "Chocolate Milka",
    imagen: "tele.jpg",
    descripcion: "Chocolate con leche Milka de 55g.",
    precio: 1600,
    stock: 14
  },
  {
    id: 6,
    nombre: "Caramelos Sugus",
    imagen: "tele.jpg",
    descripcion: "Caramelos masticables surtidos.",
    precio: 800,
    stock: 50
  },
  {
    id: 7,
    nombre: "Energizante Speed",
    imagen: "tele.jpg",
    descripcion: "Bebida energizante lata de 250ml.",
    precio: 2200,
    stock: 12
  },
  {
    id: 8,
    nombre: "Galletitas Oreo",
    imagen: "tele.jpg",
    descripcion: "Galletitas rellenas de crema sabor vainilla.",
    precio: 1700,
    stock: 16
  },
  {
    id: 9,
    nombre: "Chicle Beldent",
    imagen: "tele.jpg",
    descripcion: "Chicles sabor menta sin azúcar.",
    precio: 700,
    stock: 40
  },
  {
    id: 10,
    nombre: "Bon o Bon",
    imagen: "tele.jpg",
    descripcion: "Bombón de chocolate relleno con pasta de maní.",
    precio: 900,
    stock: 35
  }
];

function cargar() {
    for (let i = 0; i < productos.length; i = i + 1) {
        let parrafo = document.createElement("div")
        parrafo.id= "boxproducto"
        parrafo.innerHTML=`<h2 id="nombre">${productos[i].nombre}</h2>
                        <img src="${productos[i].imagen}" alt="" id="" width="200">
                        <p id="detalle">${productos[i].descripcion}</p>
                        <h3 id="precio">$ ${productos[i].precio}</h3>
                        <p id="stock">${productos[i].stock}</p>
                        <button id="btndetalle" onclick="verdetalle(${productos[i].id})">Ver detalle</button>`
        document.getElementById("boxproductos").appendChild(parrafo)
    }
}
cargar()

function verdetalle(idproducto) {
  const buscarProducto = productos.find(producto => producto.id === parseInt(idproducto));
  let productojson = JSON.stringify(buscarProducto)
  localStorage.setItem("producto", productojson)
  window.location.href ="detalle.html"
}