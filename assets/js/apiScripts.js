 // consumir el endpoint con fetch
 function consumoMiIndicador(){
 fetch('https://mindicador.cl/api')
  // recibir la respuesta de la api y convertirla a formato JSON manipulable por JS
  .then(response => response.json())
  // recibe los datos transformados a notación JSON para ser manipulados con la sintaxis datos.propiedad
  .then(data => {
    //VARIABLES UF
    let nombreUf = data.uf.nombre;
    let unidadMedidaUf = data.uf.unidad_medida;
    let fechaUf = data.uf.fecha;
    let valorUf = data.uf.valor;

    //VARIABLES DOLAR OBSERVADO
    let nombreDolarOB = data.dolar.nombre;
    let unidadMedidaDolarOB = data.dolar.unidad_medida;
    let fechaDolarOB = data.dolar.fecha;
    let valorDolarOB = data.dolar.valor;

    //VARIABLES DOLAR INTERCAMBIO
    let nombreDolarIN = data.dolar.nombre;
    let unidadMedidaDolarIN = data.dolar.unidad_medida;
    let fechaDolarIN = data.dolar.fecha;
    let valorDolarIN = data.dolar.valor;

    //VARIABLES EURO
    let nombreEuro = data.euro.nombre;
    let unidadMedidaEuro = data.euro.unidad_medida;
    let fechaEuro = data.euro.fecha;
    let valorEuro = data.euro.valor;

    //VARIABLES TASA DE DESEMPLEO 
    let nombreTD = data.tasa_desempleo.nombre;
    let unidadMedidaTD = data.tasa_desempleo.unidad_medida;
    let fechaTD = data.tasa_desempleo.fecha;
    let valorTD = data.tasa_desempleo.valor;

    //VARIABLES BITCOIN
    let nombreBit = data.bitcoin.nombre;
    let unidadMedidaBit = data.bitcoin.unidad_medida;
    let fechaBit = data.bitcoin.fecha;
    let valorBit = data.bitcoin.valor;

  })
      
}