function cargar() {
        let producto = localStorage.getItem("producto")
        let productojson = JSON.parse(producto)
        let parrafo = document.createElement("div")
        parrafo.id= "boxproducto"
        parrafo.innerHTML=`<h2 id="nombre">${productojson.nombre}</h2>
                        <img src="${productojson.imagen}" alt="" id="" width="200">
                        <p id="detalle">${productojson.descripcion}</p>
                        <h3 id="precio">$ ${productojson.precio}</h3>
                        <p id="stock">${productojson.stock}</p>
                        <button id="btndetalle" onclick="verdetalle()">Ver detalle</button>`
        document.getElementById("boxproductos").appendChild(parrafo)
    
}
cargar()