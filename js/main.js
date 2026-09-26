const listaPrecioArticulos = [
      {
        id: 1,
        codigo: "TVS0033PCO01",
        nombre: "TELEVISOR SMART TV PHILCO 33 PULGADAS", 
        marca: "PHILCO",
        precio: 331000
      },                                 
      {
        id: 2,
        codigo: "TVS0033PHI02",
        nombre: "TELEVISOR SMART TV PHILLIPS 33 PULGADAS", 
        marca: "PHILLIPS",
        precio: 332000,
      },                                 
      {
        id: 3,
        codigo: "TVS0033SAM03",
        nombre: "TELEVISOR SMART TV SAMSUNG 33 PULGADAS", 
        marca: "SAMSUNG",
        precio: 333000 
      },                                 
      {
        id: 4,
        codigo: "TVS0033JVL04",
        nombre: "TELEVISOR SMART TV JVL 33 PULGADAS",
        marca: "JVL",
        precio: 334000
      },                                 
      {
        id: 5,
        codigo: "TVS0042PCO05",
        nombre: "TELEVISOR SMART TV PHILCO 42 PULGADAS",
        marca: "PHILCO",
        precio: 425000
      },                                 
      {
        id: 6,
        codigo: "TVS0042PHI06",
        nombre: "TELEVISOR SMART TV PHILLIPS 42 PULGADAS",
        marca: "PHILLIPS",
        precio: 426000
      },                                 
      {
        id: 7,
        codigo: "TVS0042SAM07",
        nombre: "TELEVISOR SMART TV SAMSUNG 42 PULGADAS",
        marca: "SAMSUNG",
        precio: 427000 
      },                                 
      {
        id: 8,
        codigo: "TVS0042JVL08",
        nombre: "TELEVISOR SMART TV JVL 42 PULGADAS", 
        marca: "JVL",
        precio: 580000
      },                                 
      {
        id: 9,
        codigo: "COCESC009",
        nombre: "COCINA ESCORIAL",
        marca: "ESCORIAL",
        precio: 590000 
      },                                 
      {
        id: 10,
        codigo: "COCDRE010",
        nombre: "COCINA DREAN",
        marca: "DREAN",
        precio: 510000
      },                                 
      {
        id: 11,
        codigo: "COCWHI011",
        nombre: "COCINA WHIRLPOOL", 
        marca: "WHIRLPOOL",
        precio: 511000 
      },                                 
      {
        id: 12,
        codigo: "COCELE012",
        nombre: "COCINA ELECTROLUX", 
        marca: "ELECTROLUX",
        precio: 512000 
      },                                 
      {
        id: 13,
        codigo: "HELELE0013",
        nombre: "HELADERA ELECTOLUX INVERTER NO FROST",
        marca: "ELECTROLUX",
        precio: 1300000 
      },                                 
      {
        id: 14,
        codigo: "HELWHI0014",
        nombre: "HELADERA WHIRLPOOL INVERTER NO FROST",
        marca: "WHIRLPOOL",
        precio: 1400000
      },                                 
      {
        id: 15,
        codigo: "HELGAG0015",
        nombre: "HELADERA GAFA INVERTER",
        marca: "SAMSUNG",
        precio: 1500000
      },                                 
      {
        id: 16,
        codigo: "HELDRE0016",
        nombre: "HELADERA DREAN INVERTER",
        marca: "DREAN",
        precio: 1600000
      }
];

class Articulo {
      constructor(id,
                  codigo, 
                  nombre, 
                  marca,
                  precio){
        this.id = id,
        this.codigo = codigo;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
      };

      modificarPrecioPorcentaje(porcentaje){
        this.precio += (this.precio*(porcentaje/100));
      };    

};

// funcion principal
function functionPrincipalSimulador(){

  console.log("LOG - ----------------------------------");
  console.log("LOG - 0000 - PROCESO PRINCIPAL - INICIO");
  console.log("LOG - ----------------------------------"); 

  let salir = false;

  do {

      switch(seleccionarOpcionMenu()){
            case 0:
                 alert("Debe ingresar un valor, vuelva a ingresar la opcion");
                 break;
            case 1:
                 listaPrecioArticulos.push(cargarArticulo());
                 break;
            case 2:
                 informarListaPrecioArticulos();
                 break;   
            case 3:
                 informarListaPrecioArticulosConDescuento();
                 break;     
            case 4:
                 buscarArticuloPorId();
                 break;   
            case 9:
                 salir = true;
                 break;
            default:
                 alert("Opcion invalida, vuelva a ingresar la opcion");
      };

  } while (!salir);

  console.log("LOG - ----------------------------------");
  console.log("LOG - 9999 - PROCESO PRINCIPAL - FIN ");
  console.log("LOG - ----------------------------------");

};

// ejecuta la funcion principal
functionPrincipalSimulador();

/*
  FUNCIONES PRIMARIAS
*/
function seleccionarOpcionMenu(){

  console.log("LOG - SeleccionarOpcionMenu - 0000");
 
  let opcionMenu = prompt("MODULO DE INVENTARIO\n\n" + 
                          "Seleccione opcion:\n" + 
                          " 1-Crea Articulos\n" +
                          " 2-Lista de Articulos\n" +
                          " 3-Lista de Articulos con Descuento\n" +
                          " 4-Buscar Articulo por Id\n" +
                          " 9-Salida"
                         );

  console.log("LOG - seleccionarOpcionMenu - 0010 - opcionMenu = " + opcionMenu);
  
  if (esNulo(opcionMenu)){
     opcionMenu = 0;
  };

  console.log("LOG - seleccionarOpcionMenu - 9999");

  return parseInt(opcionMenu);     
};

function cargarArticulo(){
    let id = listaPrecioArticulos.length+1;
    let codigo;
    console.log("id: " + id);
    do {
        codigo = prompt("Ingrese codigo de articulo: ");
    } while (!validarCodigo(codigo));

    let nombre;
    do {
        nombre = prompt("Ingrese nombre de articulo: ");
    } while (!validarNombre(nombre));

    let marca;
    do {
         marca = prompt("Ingrese marca de articulo: ");
    } while (!validarMarca(marca));

    let precio;
    do {
         precio = prompt("Ingrese precio de articulo: ");
    } while (!validarPrecio(precio));

    const articuloNuevo = new Articulo(id, codigo.toUpperCase(), nombre.toUpperCase(), marca.toUpperCase(), parseFloat(precio));

    return articuloNuevo;

};

function validarCodigo(codigo){

     if (esNulo(codigo)) {
        alert("(Validar Codigo) - Debe ingresar un valor");                    
        return false;
      } else {
        return true;
     };

};

function validarNombre(nombre){

     if (esNulo(nombre)) {
        alert("(Validar Nombre) - Debe Ingresar un Valor");                    
        return false;
      } else {
        return true;
     };

};

function validarMarca(marca){

     if (esNulo(marca)) {
        alert("(Validar Marca) - Debe Ingresar un Valor");                    
        return false;
      } else {
        return true;
     };

};

function validarPrecio(precio){

     if (esNulo(precio)) {
        alert("(Validar Precio) - Debe Ingresar un Valor");                    
        return false;
      } else if (esString(precio)) { 
        alert("(Validar Precio) - Debe ingresar un valor numerico");                    
        return false;
      } else {
        return true;
     };

};

function validarPorcentaje(porcentaje){

     if (esNulo(porcentaje)) {
        alert("(Validar Porcenaje) - Debe Ingresar un valor");                    
        return false;
      } else if (esString(porcentaje)) { 
        alert("(Validar Porcentaje) - Debe Ingresar un valor numerico");                    
        return false;
      } else {
        return true;
     };
};

function informarListaPrecioArticulos(){

    console.log("LOG - informarListaPrecioArticulos - 0000");

    listaPrecioArticulos.forEach(articulo => {
    console.log(" - Id: " + articulo.id + 
                " - Codigo: " + articulo.codigo + 
                " - Nombre: " + articulo.nombre + 
                " - Marca: " + articulo.marca  +    
                " - Precio: " + articulo.precio);
    });

    console.log("LOG - informarListaPrecioArticulos - 9999");     

};

function informarListaPrecioArticulosConDescuento(){
    
    console.log("LOG - informarListaPrecioArticulosConDescuento - 0000");

    let porcentaje;
    do {
           porcentaje = prompt("Ingrese porcentaje de descuento: ");
    } while (!validarPorcentaje(porcentaje));

    const articulosDescuento = listaPrecioArticulos.map(articulo => {
        let precioDescuento = articulo.precio - (articulo.precio * (porcentaje/100));
        return {
            id: articulo.id,
            codigo: articulo.codigo,
            nombre: articulo.nombre,
            marca: articulo.marca,
            precio: precioDescuento
        };
    });

    articulosDescuento.forEach(articulo => {
    console.log(" - Id: " + articulo.id + 
                " - Codigo: " + articulo.codigo + 
                " - Nombre: " + articulo.nombre + 
                " - Marca: " + articulo.marca  +    
                " - Precio: " + articulo.precio);
    });

    console.log("LOG - informarListaPrecioArticulosConDescuento - 9999");

};


function buscarArticuloPorId(){
    
    console.log("LOG - buscarArticuloPorId - 0000");

    let id;
    do {
           id = prompt("Ingrese Id del articulo: ");
    } while (!validarId(id));
    
    let busqueda = listaPrecioArticulos.find(articulo => articulo.id == id)

    console.log(busqueda);

    console.log("LOG - buscarArticuloPorId - 9999");

};

function validarId(id){

     if (esNulo(id)) {
        alert("(Validar Id) - Debe ingresar un valor");                    
        return false;
      } else if (esString(id)) { 
        alert("(Validar Id) - Debe ingresar un valor numerico");                    
        return false;
      } else {
        return true;
     };
};
// funciones mas atomicas
function esNulo(valor){
  if(valor == null){return true}; return false;
};
function esString(valor){
  if (isNaN(Number(valor))) {return true}; return false;
};
