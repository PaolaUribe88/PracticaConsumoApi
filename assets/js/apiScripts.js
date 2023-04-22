function consultaUF(){
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

let arregloDatos = [nombreUf, unidadMedidaUf,fechaUf, valorUf];
console.log(arregloDatos);

let parrafosDatos = document.getElementsByClassName('contenedor__parrafo');

for(let i=0; i<parrafosDatos.length; i++){
  parrafosDatos[i].innerHTML = arregloDatos[i];
  
}
})
}
 // consumir el endpoint con fetch
 function consultaDOB(){
 fetch('https://mindicador.cl/api')
  // recibir la respuesta de la api y convertirla a formato JSON manipulable por JS
  .then(response => response.json())
  // recibe los datos transformados a notación JSON para ser manipulados con la sintaxis datos.propiedad
  .then(data => {
    //VARIABLES DOLAR OBSERVADO
    let nombreDolarOB = data.dolar.nombre;
    let unidadMedidaDolarOB = data.dolar.unidad_medida;
    let fechaDolarOB = data.dolar.fecha;
    let valorDolarOB = data.dolar.valor;

    let arregloDatos1 = [nombreDolarOB, unidadMedidaDolarOB,fechaDolarOB, valorDolarOB];
    
  
  
        
        console.log(arregloDatos1);
       

            // manipulamos el DOM para poder enviar los datos del dolar
            let parrafosDatos = document.getElementsByClassName('contenedor__parrafo');

            for(let i=0; i<parrafosDatos.length; i++){
                parrafosDatos[i].innerHTML = arregloDatos1[i];
                
            }    
            
    })
    .catch(error => console.log('No se pudo resolver la promesa.' , error));
      
}
function consultaDOI(){
  fetch('https://mindicador.cl/api')
  // recibir la respuesta de la api y convertirla a formato JSON manipulable por JS
  .then(response => response.json())
  // recibe los datos transformados a notación JSON para ser manipulados con la sintaxis datos.propiedad
  .then(data => {

 //VARIABLES DOLAR INTERCAMBIO
  let nombreDolarIN = data.dolar_intercambio.nombre;
  let unidadMedidaDolarIN = data.dolar_intercambio.unidad_medida;
  let fechaDolarIN = data.dolar_intercambio.fecha;
  let valorDolarIN = data.dolar_intercambio.valor;

  let arregloDatos2 = [nombreDolarIN, unidadMedidaDolarIN,fechaDolarIN, valorDolarIN];
  console.log(arregloDatos2);


  let parrafosDatos= document.getElementsByClassName('contenedor__parrafo');

for(let i=0; i<parrafosDatos.length; i++){
  parrafosDatos[i].innerHTML = arregloDatos2[i];
  
}
})
}
function consultaEURO(){
  fetch('https://mindicador.cl/api')
  // recibir la respuesta de la api y convertirla a formato JSON manipulable por JS
  .then(response => response.json())
  // recibe los datos transformados a notación JSON para ser manipulados con la sintaxis datos.propiedad
  .then(data => {

    //VARIABLES EURO
    let nombreEuro = data.euro.nombre;
    let unidadMedidaEuro = data.euro.unidad_medida;
    let fechaEuro = data.euro.fecha;
    let valorEuro = data.euro.valor;

    let arregloDatos3 = [nombreEuro, unidadMedidaEuro,fechaEuro, valorEuro];
  console.log(arregloDatos3);


  let parrafosDatos= document.getElementsByClassName('contenedor__parrafo');

for(let i=0; i<parrafosDatos.length; i++){
  parrafosDatos[i].innerHTML = arregloDatos3[i];
  
}
})
}
function consultaTD(){
  fetch('https://mindicador.cl/api')
  // recibir la respuesta de la api y convertirla a formato JSON manipulable por JS
  .then(response => response.json())
  // recibe los datos transformados a notación JSON para ser manipulados con la sintaxis datos.propiedad
  .then(data => {
    
    //VARIABLES TASA DE DESEMPLEO 
    let nombreTD = data.tasa_desempleo.nombre;
    let unidadMedidaTD = data.tasa_desempleo.unidad_medida;
    let fechaTD = data.tasa_desempleo.fecha;
    let valorTD = data.tasa_desempleo.valor;
    
    let arregloDatos4 = [nombreTD, unidadMedidaTD,fechaTD, valorTD];
    
    console.log(arregloDatos4);    

    let parrafosDatos= document.getElementsByClassName('contenedor__parrafo');
    for(let i=0; i<parrafosDatos.length; i++){
      parrafosDatos[i].innerHTML = arregloDatos4[i];
      
    }
    })
    }
    
    function consultaBIT(){
      fetch('https://mindicador.cl/api')
      // recibir la respuesta de la api y convertirla a formato JSON manipulable por JS
      .then(response => response.json())
      // recibe los datos transformados a notación JSON para ser manipulados con la sintaxis datos.propiedad
      .then(data => {
       //VARIABLES BITCOIN
        let nombreBit = data.bitcoin.nombre;
        let unidadMedidaBit = data.bitcoin.unidad_medida;
        let fechaBit = data.bitcoin.fecha;
        let valorBit = data.bitcoin.valor;;

        let arregloDatos5 = [nombreBit, unidadMedidaBit,fechaBit, valorBit];
        console.log(arregloDatos5);    
        
        let parrafosDatos= document.getElementsByClassName('contenedor__parrafo');

        for(let i=0; i<parrafosDatos.length; i++){
          parrafosDatos[i].innerHTML = arregloDatos5[i];
          
        }
        })
        }
    