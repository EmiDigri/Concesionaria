const autos = require('./autos');

var concesionaria = {

   autos: autos,

   buscarAuto: function (patente) {
      for (let i = 0; i < autos.length; i++) {
         if (autos[i].patente === patente) {
            let autoEncontrado = autos[i];
            return autoEncontrado;
         }
      }
      return null;

   },

   venderAuto: function (patente) {
      let auto = this.buscarAuto(patente);
      if (auto != null) {
         auto.vendido = true;
      }
   },

   autosParaLaVenta: function () {
      let lista = this.autos.filter(function (auto) {
         return auto.vendido == false;
      })
      return lista;
   },

   autosNuevos: function () {
      let autosNuevos = this.autosParaLaVenta();
      return autosNuevos.filter(a => a.km < 100);

   },

   listaDeVentas: function () {
      let vendidos = this.autos.filter(function (auto) {
         return auto.vendido == true;
      });

      let autosVendidosPorPrecio = vendidos.map(function (auto) {
         return auto.precio;

      })
      return autosVendidosPorPrecio;
   },

   totalDeVentas: function () {
      let ventas = this.listaDeVentas();
      if (ventas.length > 0) {
         return ventas.reduce(function (acum, num) {
            return acum + num;
         }, 0);
      } else {
         return 0;
      }
   },

   puedeComprar: function (auto, persona) {

      return (auto.precio <= persona.capacidadDePagoTotal) && ((auto.precio / auto.cuotas) <= persona.capacidadDePagoEnCuotas)

   },


   autosQuePuedeComprar: function (persona) {
      let enVenta = this.autosParaLaVenta();

      return enVenta.filter(auto => {
         return this.puedeComprar(auto, persona)
      })


   }
}

module.exports = concesionaria;
