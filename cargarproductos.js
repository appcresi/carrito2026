const productos = [
  {
    nombre: "Coca-Cola 500ml",
    imagen: "https://imagenes.ejemplo.com/cocacola.jpg",
    descripcion: "Gaseosa Coca-Cola de 500ml bien fría.",
    precio: 1800,
    stock: 25
  },
  {
    nombre: "Papas Lays Clásicas",
    imagen: "https://imagenes.ejemplo.com/lays.jpg",
    descripcion: "Papas fritas sabor clásico en paquete mediano.",
    precio: 1500,
    stock: 18
  },
  {
    nombre: "Alfajor Oreo",
    imagen: "https://imagenes.ejemplo.com/oreo.jpg",
    descripcion: "Alfajor relleno con crema sabor vainilla.",
    precio: 1200,
    stock: 30
  },
  {
    nombre: "Agua Mineral 1.5L",
    imagen: "https://imagenes.ejemplo.com/agua.jpg",
    descripcion: "Botella de agua mineral sin gas.",
    precio: 1400,
    stock: 20
  },
  {
    nombre: "Chocolate Milka",
    imagen: "https://imagenes.ejemplo.com/milka.jpg",
    descripcion: "Chocolate con leche Milka de 55g.",
    precio: 1600,
    stock: 14
  },
  {
    nombre: "Caramelos Sugus",
    imagen: "https://imagenes.ejemplo.com/sugus.jpg",
    descripcion: "Caramelos masticables surtidos.",
    precio: 800,
    stock: 50
  },
  {
    nombre: "Energizante Speed",
    imagen: "https://imagenes.ejemplo.com/speed.jpg",
    descripcion: "Bebida energizante lata de 250ml.",
    precio: 2200,
    stock: 12
  },
  {
    nombre: "Galletitas Oreo",
    imagen: "https://imagenes.ejemplo.com/galletitas-oreo.jpg",
    descripcion: "Galletitas rellenas de crema sabor vainilla.",
    precio: 1700,
    stock: 16
  },
  {
    nombre: "Chicle Beldent",
    imagen: "https://imagenes.ejemplo.com/beldent.jpg",
    descripcion: "Chicles sabor menta sin azúcar.",
    precio: 700,
    stock: 40
  },
  {
    nombre: "Bon o Bon",
    imagen: "https://imagenes.ejemplo.com/bonobon.jpg",
    descripcion: "Bombón de chocolate relleno con pasta de maní.",
    precio: 900,
    stock: 35
  }
];

function cargar() {
    for (let i = 0; i < productos.length; i = i + 1) {
        let parrafo = document.createElement("div")
        parrafo.innerHTML=`<h2 id="nombre">${productos.nombre}</h2>
                        <img src="tele.jpg" alt="" id="${productos.imagen}">
                        <p id="detalle">${productos.descripcion}</p>
                        <h3 id="precio">${productos.precio}</h3>
                        <p id="stock">${productos.stock}</p>`
    }
}