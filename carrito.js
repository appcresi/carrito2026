let productosel = localStorage.getItem("carrito")
let productojson = JSON.parse(productosel)
let contadortotal =0;
let totalapagar = 0;
function cargar(){
    if (productojson == null || productojson.length === 0) {
        document.querySelector("main").innerHTML = `<p class="carrito-vacio">Tu carrito está vacío.</p>`
        return
    }
    for(let producto of productojson){
        let parrafo = document.createElement("tr")
        parrafo.id= producto.id
        parrafo.innerHTML = `<td><img src="${producto.imagen}" width="50"></td>
                    <td>${producto.cantidad}</td>
                    <td>${producto.nombre}</td>
                    <td>$ ${producto.precio}</td>
                    <td><button class="btn btn-danger" onclick="borrarproducto(${producto.id})">Eliminar</button></td>
        `
        contadortotal = contadortotal + producto.cantidad
        document.getElementById("contadorcarrito").innerHTML= contadortotal
        totalapagar = totalapagar + producto.precio
        document.getElementById("totalapagar").innerHTML= "Precio Total = $" + totalapagar
        localStorage.setItem("contadortotal", contadortotal )
        document.getElementById("lista").appendChild(parrafo)
    }
}
cargar()

function vercarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    if (carrito!= null){
        document.getElementById("contadorcarrito").style.display="block"
    }
}
vercarrito()

function finalpago() {
    alert("¡Gracias por su compra! Total a pagar: $" + totalapagar)   
}

function borrarproducto(id) {
    if (confirm("¿Eliminar este producto del carrito?")) {
        let carrito = JSON.parse(localStorage.getItem("carrito"))
        carrito = carrito.filter(producto => producto.id !== id)
        localStorage.setItem("carrito", JSON.stringify(carrito))
        location.reload()
    }
}