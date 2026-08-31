let productosel = localStorage.getItem("carrito")
let productojson = JSON.parse(productosel)

function cargar(){
    for(let producto of productojson){
        let parrafo = document.createElement("tr")
        parrafo.innerHTML = `<th><img src="${producto.imagen}" width="50"></th>
                    <th>${producto.cantidad}</th>
                    <th>${producto.nombre}</th>
                    <th>${producto.precio}</th>
                    <th><button>X</button></th>
        `
        document.getElementById("lista").appendChild(parrafo)
    }
}
cargar()