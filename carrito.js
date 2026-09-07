let productosel = localStorage.getItem("carrito")
let productojson = JSON.parse(productosel)
let contadortotal = 0;
let totalapagar = 0;

function cargar(){
    for(let producto of productojson){
        let parrafo = document.createElement("tr")
        parrafo.id= producto.id
        parrafo.innerHTML = `<th><img src="${producto.imagen}" width="50"></th>
                    <th>${producto.cantidad}</th>
                    <th>${producto.nombre}</th>
                    <th>${producto.precio}</th>
                    <th><button onclick="eliminarProducto">Eliminar</button></th>
        `
        contadortotal = contadortotal + producto.cantidad
        document.getElementById("contadorcarrito").innerHTML= contadortotal
        totalapagar = totalapagar + producto.precio
        document.getElementById("totalapagar").innerHTML= "Precio Total: $ " + totalapagar
        localStorage.setItem("contadorcarrito", contadortotal)
        document.getElementById("lista").appendChild(parrafo)
    }
}
cargar()

function vercarrito(){
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    if (carrito!= null){
        document.getElementById("contadorcarrito").style.display="block"
    }
}
vercarrito()

function pagar(){
    alert("¡Gracias por tu compra! Procesando pago...")
}

function eliminarProducto(){
    alert("estas a punto de borrar un producto del carrito.") 
    document.getElementById("lista1").removeChild(parrafo)
}