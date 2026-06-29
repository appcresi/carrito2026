let producto = localStorage.getItem("producto")
let productojson = JSON.parse(producto)

function cargar() {
        let parrafo = document.createElement("div")
        parrafo.id= "boxproducto"
        parrafo.innerHTML=`<h2 id="nombre">${productojson.nombre}</h2>
                        <img src="${productojson.imagen}" alt="" id="" width="200">
                        <p id="detalle">${productojson.descripcion}</p>
                        <h3 id="precio">$ ${productojson.precio}</h3>
                        <p id="stock">${productojson.stock}</p>
                        <div id="boxcontador">
                            <button id="btnrestar" onclick="restar()">-</button>
                            <p id="contador">0</p>
                            <button id="btnsumar" onclick="sumar()">+</button>
                        </div>
                        <button id="btnagregar" onclick="agregar()">Agregar al carrito</button>
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