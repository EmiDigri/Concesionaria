const concesionaria = require('./funciones');

const accion = process.argv[2];
let primerParametro = process.argv[3];



switch (accion) {

case "listar" : 
console.log(concesionaria.autos);
break;

case "buscar" : 
console.log('El resultado de la búsqueda es:')
console.log('-------------------------------')
console.log(concesionaria.buscarAuto(primerParametro));
break;

case "vender" : 

concesionaria.venderAuto(primerParametro)
break;

case "en venta":
console.log(concesionaria.autosParaLaVenta());
break;

case "vendidos" :
console.log(concesionaria.listaDeVentas());    
break;

case "total de ventas" :
console.log(concesionaria.totalDeVentas());    
break;

case "ver posibles" :

let nuevaPersona = {
    nombre : process.argv[3],
    capacidadDePagoEnCuotas : process.argv[4],
    capacidadDePagoTotal : process.argv[5],
}




let mostrarPorConsola = concesionaria.autosQuePuedeComprar(nuevaPersona);

console.log("-----------------------------------------------------------")
console.log(`${process.argv[3]} puede comprar el/los siguientes autos : `)
console.log("-----------------------------------------------------------")
console.log(mostrarPorConsola);
break;

default : 
console.log('No entiendo lo que quieres hacer');


}