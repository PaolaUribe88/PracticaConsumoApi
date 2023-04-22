
let url = 'https://mindicador.cl/api'
fetch(url)
.then(traeDatos => traeDatos.json())
.then(datos =>{
    console.log(datos)
    //Nombre del dolar
    let dolar = document.getElementById('dolar')
    dolar.innerHTML = datos.dolar.nombre

    //Valor del Dolar
    let valor = document.getElementById('valor')
    valor.innerHTML = datos.dolar.valor

})