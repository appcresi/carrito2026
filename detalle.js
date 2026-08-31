let producto = localStorage.getItem("producto")
let productojson = JSON.parse(producto)

function cargar() {
        let parrafo = document.createElement("div")
        parrafo.className = "producto-card producto-detalle"
        parrafo.innerHTML=`<img src="${productojson.imagen}" alt="${productojson.nombre}" class="producto-img">
                        <div class="producto-info">
                            <h2 class="producto-nombre">${productojson.nombre}</h2>
                            <p class="producto-desc">${productojson.descripcion}</p>
                            <h3 class="producto-precio">$ ${productojson.precio}</h3>
                            <p class="producto-stock">Stock disponible: ${productojson.stock}</p>
                            <div id="boxcontador">
                                <button id="btnrestar" onclick="restar()">-</button>
                                <p id="contador">0</p>
                                <button id="btnsumar" onclick="sumar()">+</button>
                            </div>
                            <button id="btnagregar" class="btn btn-primary" onclick="agregar()">Agregar al carrito</button>
                        </div>
                        `
        document.getElementById("boxproductos").appendChild(parrafo)
}
cargar()

let contar = 0;
function restar() {
    if (contar>0) {
        contar = contar - 1;
        document.getElementById("contador").innerHTML= contar
    }
}
function sumar() {
    if (contar < productojson.stock) {
        contar = contar + 1;
        document.getElementById("contador").innerHTML= contar
    }else{
        alert("Stock máximo")
    }
}

const agregar = () => {
    if(contar ==0){
        alert("Ingrese la cantidad de productos")
    }else{
        let carrito = JSON.parse(localStorage.getItem("carrito"))
        if (carrito== null){
            carrito = []
        }
        productonuevo ={
            id: productojson.id,
            imagen: productojson.imagen,
            nombre: productojson.nombre,
            cantidad:contar,
            precio: productojson.precio*contar
        }
        carrito.push(productonuevo)
        productojson = JSON.stringify(carrito)
        localStorage.setItem("carrito", productojson)
        document.getElementById("contadorcarrito").style.display="block"
        window.location.href ="carrito.html"
    }
}

function vercarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    if (carrito!= null){
        document.getElementById("contadorcarrito").style.display="block"
        document.getElementById("contadorcarrito").innerHTML = localStorage.getItem("contadortotal")
    }
}
vercarrito()