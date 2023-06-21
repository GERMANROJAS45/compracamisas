function calcularCompra(){
    let cantidad = parseInt(document.getElementById("cantidadInput").value)
    let precio = parseInt(document.getElementById("valorInput").value)
    let total = cantidad * precio
    let totalCompra

    if (cantidad >=3) {
          totalCompra = total * 0.8
    }

    else if (cantidad > 0){ 
        totalCompra = total * 0.9
    }

    let totalResultadoElement = document.getElementById("totalResultado")
    totalResultadoElement.textContent = "El total de la cantidad de camisas es:" + total

    let totalconDescuento = document.getElementById("totalCompraResultado")
    totalResultadoElement.textContent = "El total con descuento fue de:" + totalCompra
}