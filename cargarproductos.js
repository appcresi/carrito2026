import { db } from "./firebase-config.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

let productos = [];

const cargar = async  () => {
    const snapshot = await getDocs(collection(db, "productos"));
    productos = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));

    for (let producto of productos) {
        let parrafo = document.createElement("div")
        parrafo.id= "boxproducto"
        parrafo.innerHTML=`<h2 id="nombre">${producto.nombre}</h2>
                        <img src="${producto.imagen}" alt="" id="" width="200">
                        <p id="detalle">${producto.descripcion}</p>
                        <h3 id="precio">$ ${producto.precio}</h3>
                        <p id="stock">${producto.stock}</p>
                        <button class="btndetalle">Ver detalle</button>`
        parrafo.querySelector(".btndetalle").addEventListener("click", () => {
            verdetalle(producto.id);
        });

        document.getElementById("boxproductos").appendChild(parrafo)
    }
}

cargar()

const verdetalle = (idproducto) => {
  const buscarProducto = productos.find(producto => producto.id === idproducto);
  let productojson = JSON.stringify(buscarProducto)
  localStorage.setItem("producto", productojson)
  window.location.href ="detalle.html"
}

const vercarrito = () =>{
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    if (carrito!= null){
        document.getElementById("contadorcarrito").style.display="block"
        document.getElementById("contadorcarrito").innerHTML = localStorage.getItem("contadorcarrito")
    }
}
vercarrito()