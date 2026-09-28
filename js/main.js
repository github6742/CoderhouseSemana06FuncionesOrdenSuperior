const listaPrecioArticulos = [
      {
        id: 1,
        codigo: "TVS0033PCO01",
        nombre: "TELEVISOR SMART TV PHILCO 33 PULGADAS", 
        marca: "PHILCO",
        categoria: "TELEVISOR",
        precio: 331000
      },                                 
      {
        id: 2,
        codigo: "TVS0033PHI02",
        nombre: "TELEVISOR SMART TV PHILLIPS 33 PULGADAS", 
        marca: "PHILLIPS",
        categoria: "TELEVISOR",
        precio: 332000
      },                                 
      {
        id: 3,
        codigo: "TVS0033SAM03",
        nombre: "TELEVISOR SMART TV SAMSUNG 33 PULGADAS", 
        marca: "SAMSUNG",
        categoria: "TELEVISOR",
        precio: 333000
      },                                 
      {
        id: 4,
        codigo: "TVS0033JVL04",
        nombre: "TELEVISOR SMART TV JVL 33 PULGADAS",
        marca: "JVL",
        categoria: "TELEVISOR",
        precio: 334000
      },                                 
      {
        id: 5,
        codigo: "TVS0042PCO05",
        nombre: "TELEVISOR SMART TV PHILCO 42 PULGADAS",
        marca: "PHILCO",
        categoria: "TELEVISOR",
        precio: 425000
      },                                 
      {
        id: 6,
        codigo: "TVS0042PHI06",
        nombre: "TELEVISOR SMART TV PHILLIPS 42 PULGADAS",
        marca: "PHILLIPS",
        categoria: "TELEVISOR",
        precio: 426000
      },                                 
      {
        id: 7,
        codigo: "TVS0042SAM07",
        nombre: "TELEVISOR SMART TV SAMSUNG 42 PULGADAS",
        marca: "SAMSUNG",
        categoria: "TELEVISOR",
        precio: 427000
      },                                 
      {
        id: 8,
        codigo: "TVS0042JVL08",
        nombre: "TELEVISOR SMART TV JVL 42 PULGADAS", 
        marca: "JVL",
        categoria: "TELEVISOR",
        precio: 580000
      },                                 
      {
        id: 9,
        codigo: "COCESC009",
        nombre: "COCINA ESCORIAL",
        marca: "ESCORIAL",
        categoria: "COCINA",
        precio: 590000
      },                                 
      {
        id: 10,
        codigo: "COCDRE010",
        nombre: "COCINA DREAN",
        marca: "DREAN",
        categoria: "COCINA",
        precio: 510000
      },                                 
      {
        id: 11,
        codigo: "COCWHI011",
        nombre: "COCINA WHIRLPOOL", 
        marca: "WHIRLPOOL",
        categoria: "COCINA",
        precio: 511000
      },                                 
      {
        id: 12,
        codigo: "COCELE012",
        nombre: "COCINA ELECTROLUX", 
        marca: "ELECTROLUX",
        categoria: "COCINA",
        precio: 512000
      },                                 
      {
        id: 13,
        codigo: "HELELE0013",
        nombre: "HELADERA ELECTOLUX INVERTER NO FROST",
        marca: "ELECTROLUX",
        categoria: "HELADERA",
        precio: 1300000
      },                                 
      {
        id: 14,
        codigo: "HELWHI0014",
        nombre: "HELADERA WHIRLPOOL INVERTER NO FROST",
        marca: "WHIRLPOOL",
        categoria: "HELADERA",
        precio: 1400000
      },                                 
      {
        id: 15,
        codigo: "HELGAG0015",
        nombre: "HELADERA GAFA INVERTER",
        marca: "SAMSUNG",
        categoria: "HELADERA",
        precio: 1500000
      },                                 
      {
        id: 16,
        codigo: "HELDRE0016",
        nombre: "HELADERA DREAN INVERTER",
        marca: "DREAN",
        categoria: "HELADERA",
        precio: 1600000
      }
];

const carritoCompras = [];
class Articulo {
      constructor(id,
                  codigo, 
                  nombre, 
                  marca,
                  categoria,
                  precio){
        this.id = id,
        this.codigo = codigo;
        this.nombre = nombre;
        this.marca = marca;
        this.categoria = categoria;
        this.precio = precio;
      };
};

class Compra {
      constructor(codigo, nombre, precio, cantidad) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
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
            case 5:
                 buscarArticuloPorCategoria();
                 break;        
            case 6:
                 buscarArticuloPorNombre();
                 break;          
            case 7:
                 verificarExisteArticulo();
                 break;           
            case 8:
                 comprar();
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

  let opcionMenu = prompt("MODULO DE ARTICULOS, PRECIOS, COMPPRAS\n\n" + 
                          "Seleccione opcion:\n" + 
                          " 1-Crea Articulos\n" +
                          " 2-Lista de Articulos\n" +
                          " 3-Lista de Articulos con Descuento\n" +
                          " 4-Buscar Articulo por Id\n" +
                          " 5-Buscar Articulo por Categoria\n" +
                          " 6-Buscar Articulo por Nombre\n" +
                          " 7-Verificar Existencia Articulo\n" +
                          " 8-Comprar\n" +
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


    let categoria;
    do {
         categoria = prompt("Ingrese categoria de articulo: ");
    } while (!validarCategoria(categoria));

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
        alert("(Validar Nombre) - Debe ingresar un valor");                    
        return false;
      } else {
        return true;
     };

};

function validarMarca(marca){

     if (esNulo(marca)) {
        alert("(Validar Marca) - Debe ingresar un valor");                    
        return false;
      } else {
        return true;
     };

};

function validarCategoria(categoria){

     if (esNulo(categoria)) {
        alert("(Validar Categoria) - Debe ingresar un valor");                    
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
        alert("(Validar Porcenaje) - Debe ingresar un valor");                    
        return false;
      } else if (esString(porcentaje)) { 
        alert("(Validar Porcentaje) - Debe ingresar un valor numerico");                    
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
                " - Categoria: " + articulo.categoria  +    
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
            categoria: articulo.categoria,
            precio: precioDescuento
        };
    });

    articulosDescuento.forEach(articulo => {
    console.log(" - Id: " + articulo.id + 
                " - Codigo: " + articulo.codigo + 
                " - Nombre: " + articulo.nombre + 
                " - Marca: " + articulo.marca  +  
                " - Categoria: " + articulo.categoria  +    
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
    
    if (listaPrecioArticulos.some(articulo => articulo.id == id)){

    let articuloEncontrado = listaPrecioArticulos.find(articulo => articulo.id == id);

    console.log(" - Id: " + articuloEncontrado.id + 
                " - Codigo: " + articuloEncontrado.codigo + 
                " - Nombre: " + articuloEncontrado.nombre + 
                " - Marca: " + articuloEncontrado.marca  +   
                " - Categoria: " + articuloEncontrado.categoria  +     
                " - Precio: " + articuloEncontrado.precio);

    alert("Articulo encontrado: " +
          "\n - Id: " + articuloEncontrado.id + 
          "\n - Codigo: " + articuloEncontrado.codigo + 
          "\n - Nombre: " + articuloEncontrado.nombre + 
          "\n - Marca: " + articuloEncontrado.marca  +    
          "\n - Categoria: " + articuloEncontrado.categoria  +    
          "\n - Precio: " + articuloEncontrado.precio);
    } else {
        alert("Id invalido");
    };

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

function buscarArticuloPorCategoria(){
    
    console.log("LOG - buscarArticuloPorCategoria - 0000");

    let categoria;

    do {
           categoria = prompt("Ingrese categoria de articulo: "+
                              "\n - 1 - TELEVISORES" +
                              "\n - 2 - COCINAS" +
                              "\n - 3 - HELADERAS" 
           );
    } while (!validarCategoria(categoria));

   console.log("LOG - buscarArticuloPorCategoria - 0010 - categoria: " +  categoria);

   switch (parseInt(categoria)){
            case 1:
                categoriaSeleccionada = "TELEVISOR";
                break;
            case 2:
                categoriaSeleccionada = "COCINA";
                break;
            default:
                categoriaSeleccionada = "HELADERA";
                break;
        };
    
    let articulosEncontrados = listaPrecioArticulos.filter(articulo => articulo.categoria == categoriaSeleccionada )

    articulosEncontrados.forEach(articulo => {
    console.log(" - Id: " + articulo.id + 
                " - Codigo: " + articulo.codigo + 
                " - Nombre: " + articulo.nombre + 
                " - Marca: " + articulo.marca  +  
                " - Categoria: " + articulo.categoria  +    
                " - Precio: " + articulo.precio);
    });

    console.log("LOG - buscarArticuloPorCategoria - 9999");

};

function validarCategoria(categoria){

     if (esNulo(categoria)) {
        alert("(Validar Categoria - Debe ingresar un valor");                    
        return false;
      } else if (esString(categoria)) { 
        alert("(Validar Categoria) - Debe ingresar un valor numerico");                    
        return false;
      } else {
          if (categoria >=1 && categoria <= 3) {
            return true;
          } else {
            alert("Opcion invalida, vuelva a ingresar la opcion");
            return false;        
          };
     };
};

function buscarArticuloPorNombre(){
    
    console.log("LOG - buscarArticuloPorNombre - 0000");

    let nombre;

    do {
           nombre = prompt("Ingrese el nombre o parte del nombre, (por ejemplo smart, inverter) " 
           );
    } while (!validarNombre(nombre));

    console.log("LOG - buscarArticuloPorNombre - 0010 - nombre: " + nombre);
   
    let articulosEncontrados = listaPrecioArticulos.filter(articulo => articulo.nombre.toUpperCase().includes(nombre.toUpperCase()) );

    articulosEncontrados.forEach(articulo => {
    console.log(" - Id: " + articulo.id + 
                " - Codigo: " + articulo.codigo + 
                " - Nombre: " + articulo.nombre + 
                " - Marca: " + articulo.marca  +  
                " - Categoria: " + articulo.categoria  +    
                " - Precio: " + articulo.precio);
    });

    console.log("LOG - buscarArticuloPorNombre - 9999");

};


function validarNombre(nombre){

     if (esNulo(nombre)) {
        alert("(Validar Nombre) - Debe ingresar un valor");                    
        return false;
     } else {          
            return true;        
     };
};

function verificarExisteArticulo(){
    
    console.log("LOG - verificarExisteArticulo - 0000");

    let codigo;

    do {
           codigo = prompt("Ingrese el codigo de articulo: " 
           );
    } while (!validarCodigo(codigo));

    console.log("LOG - verificarExisteArticulo - 0010 - codigo: " + codigo);
   
    let existeCodigo = listaPrecioArticulos.some(articulo => articulo.codigo.toUpperCase() == codigo.toUpperCase() );

    if (!existeCodigo){
       alert("El articulo no existe");
       console.log("El articulo no existe");
    } else {
       alert("El articulo si existe " );
       console.log("El articulo si existe " );
    };

  console.log("LOG - verificarExisteArticulo - 9999");

};

function comprar(){

    console.log("LOG - comprar - 0000");

    let articulo;
    let categoria;
    let seguirComprando = true;

    do {

         do {
             categoria = prompt("Ingrese categoria de articulo: "+
                                "\n - 1 - TELEVISORES" +
                                "\n - 2 - COCINAS" +
                                "\n - 3 - HELADERAS" 
                                );

             } while (!validarCategoria(categoria));

             console.log("LOG - Comprar - 0010 - categoria: " +  categoria);

             switch (parseInt(categoria)){
                    case 1:
                         categoriaSeleccionada = "TELEVISOR";
                         break;
                    case 2:
                         categoriaSeleccionada = "COCINA";
                         break;
                    default:
                         categoriaSeleccionada = "HELADERA";
                         break;
                    };
    
            let articulosEncontrados = listaPrecioArticulos.filter(articulo => articulo.categoria == categoriaSeleccionada );
            let listaArticulos = "Ingrese el id de articulo valido:\n";
            articulosEncontrados.forEach(articulo => {
            listaArticulos += " - Id: " + articulo.id + 
                        " - Nombre: " + articulo.nombre + 
                        " - Precio: " + articulo.precio + "\n";
            });
            let articuloIngresado;
            do {
                articuloIngresado = prompt(listaArticulos);
            } while (!validarArticuloIngresado(articuloIngresado, categoriaSeleccionada));

            let articuloDeLista = listaPrecioArticulos.find(articulo => articulo.id == articuloIngresado );

            console.log("LOG - Comprar - 0020 - id: " +  articuloDeLista.id +
                                             ", nombre: " + articuloDeLista.nombre +
                                             ", precio: " + articuloDeLista.precio
            );

            let cantidad;

            do {
                cantidad = parseInt(prompt ("Ingrese la cantidad: "));
            } while (!validarCantidad(cantidad));            

            console.log("LOG - Comprar - 0030 - cantidad: " +  cantidad);

            cargarCompra(articuloDeLista.codigo, articuloDeLista.nombre, parseInt(articuloDeLista.precio), parseInt(cantidad));

            console.log("LOG - Comprar - 0040 - cargarCompra()");

            do {
                 continua = prompt("Continua comprando(SI/NO): ");
            } while (!validarContinua(continua));

            
            console.log("LOG - Comprar - 0050 - continua: " + continua);

            if (continua.toUpperCase() == "SI") { seguirComprando = true;} else { seguirComprando = false;};

    } while (seguirComprando);
    
    const total = carritoCompras.reduce((sumador, compra)  => sumador + (parseInt(compra.cantidad)*parseInt(compra.precio)),0);

    console.log("El total de compras del carrito es: " + total);

    carritoCompras.splice(0,carritoCompras.length);

    console.log("LOG - comprar - 9999");

};


function validarArticuloIngresado(id, categoria){

     console.log("LOG - validarArticuloIngresado - 0000 - id: " + id);
     
     let articuloEncontrado;

     if (!validarId(id)) {
        return false;
     };

     if (listaPrecioArticulos.some(articulo => articulo.id == id )){

        articuloEncontrado = listaPrecioArticulos.find(articulo => articulo.id == id);

        if (articuloEncontrado.id == id && articuloEncontrado.categoria == categoria){
            return true;
        } else {
            alert("Id invalido");
            return false;
        };

     } ;

};
function validarCantidad(cantidad){
    

     if (esNulo(cantidad)) {
        alert("(Validar Cantidad) - Debe ingresar un valor");                    
        return false;
      } else if (esString(cantidad)) { 
        alert("(Validar Cantidad) - Debe ingresar un valor numerico");                    
        return false;
      } else {
        return true;
     };
};

function cargarCompra(codigo, nombre, precio, cantidad){
    
    const compraNueva = new Compra(codigo, nombre, precio, cantidad);
     
    carritoCompras.push(compraNueva);
};



function validarContinua(continua){

     if (esNulo(continua)) {
        alert("(Validar Continua) - Debe ingresar un valor");                    
        return false;
      } else if (continua.toUpperCase() == "SI" || continua.toUpperCase() == "NO"){
        return true;
      } else {
        alert("Ingrese un valor valido")  ;
        return false;
     };

};
// funciones mas atomicas
const esNulo = (valor) => (valor == "");

const esString = (valor) => (isNaN(Number(valor)));