class Producto
{
    static contadorProductos=0;

    constructor(nombre,precio,cantiadadAcomprar)
    {
        this.cantiadadAcomprar=cantiadadAcomprar;
        this.idProducto=++Producto.contadorProductos;
        this.nombre=nombre;
        this.precio=precio*cantiadadAcomprar;
       
    }

    get _idProducto(){
        return this.idProducto;
    }

    get _nombre(){
        return this.nombre;
    }

    set setNombre(nuevoNombre){
        this.nombre=nuevoNombre;
    }

    get _precio(){
        return this.precio;
    }

    set setPrecio(nuevoPrecio){
        this.precio=nuevoPrecio;
    }

    get _cantiadadAcomprar(){
        return this.cantiadadAcomprar;
    }
    //para que el toString funcione tienen que estar todos los get y los atributos definidos en el constructor
    toString(){
        return `idProducto: ${this.idProducto}, nombre: ${this.nombre}, precio: ${this.precio}$ , cantidad:${this.cantiadadAcomprar}  `;
    }
}

class Orden
{
    static contadorOrden=0;
    
    static get MAX_PRODUCTOS()
    {
        return 5;
    }
   
    constructor()
    {
        this.idOrden=++Orden.contadorOrden;
       
        this.productosSeleccionados=[];
    }
    get getIdOrden()
    {
        return this.idOrden;
    }
    agregarUnProducto(productoAagregar)
    {
        if(this.productosSeleccionados.length<Orden.MAX_PRODUCTOS)
        {
            this.productosSeleccionados.push(productoAagregar);
        }else
        {
            console.log("cantidad maxima alcanzada [ :( ]")
        }
       
    }

    calcularTotal()
    {
        let costoTotal=0;
        for(let productoActual of this.productosSeleccionados)
        {
            costoTotal+=productoActual.precio;

        }
        return costoTotal;
    }
    mostrarOrden()
    {
        //pasando todos los productos a un string
        let productoOrden='';
        
        for (let producto of this.productosSeleccionados)
        {       
            productoOrden+=producto.toString();
        }
        console.log(`idOrden: ${this.idOrden},cantidad a pagar: ${this.calcularTotal()}$,productos:${productoOrden}  `)
        
      
    }
}

let producto1=new Producto("manzana",20,2);
let producto2=new Producto("pera",200,4);
let producto3=new Producto("banana",500,2);
let producto4=new Producto("naranja",20,2);
let producto5=new Producto("sandia",200,4);
let producto6=new Producto("mandioca",500,2);

console.log("\n-------\mostrando el producto 1-------\n");

console.log(producto1.toString());

let orden1=new Orden();

orden1.agregarUnProducto(producto1);
orden1.agregarUnProducto(producto2);
orden1.agregarUnProducto(producto2);
orden1.agregarUnProducto(producto5);
orden1.agregarUnProducto(producto1);

let orden2=new Orden();
orden2.agregarUnProducto(producto4);
orden2.agregarUnProducto(producto1);
orden2.agregarUnProducto(producto2);

console.log("\n-------\mostrando la orden 1-------\n");
orden1.mostrarOrden();


console.log("\n-------\mostrando la orden 2-------\n");
orden2.mostrarOrden();


