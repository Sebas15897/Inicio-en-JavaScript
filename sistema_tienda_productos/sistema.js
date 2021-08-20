<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        /*
        * Sebastián Contreras </>
        * Sistema de ventas
        */
        class Producto{
            static contadorProductos = 0;
            constructor(nombre, precio) {
                this._idProducto = ++Producto.contadorProductos;
                this._nombre = nombre;
                this._precio = precio;
            }

            get idProducto () {
                return this._idProducto;
            }

            get nombre () {
                return this._nombre;
            }

            set nombre ( nombre ) {
                this._nombre = nombre;
            }

            get precio () {
                return this._precio;
            }

            set precio ( precio ) {
                this._precio = precio;
            }

            toString() {
                return `idProducto ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}`;
            }
        }

        

        class Orden{
            static contadorOrdenes = 0;
            static get MAX_PRODUCTOS() {
                return 5;
            }
            constructor() {
                this._idOrden = ++Orden.contadorOrdenes;
                this._productos = [];
                //this._contadorProductosAgregados = 0;
            }
            get idORden () {
                return this._idOrden;
            }

            agregarProducto( producto ) {
                if ( this._productos.length < Orden.MAX_PRODUCTOS ) {
                    this._productos.push( producto );
                } else {
                    console.log('Limite de productos alcanzado');
                }
            }
            
            calcularTotal() {
                let totalVenta = 0;
                for( let producto of this._productos ) {
                    totalVenta += producto.precio; //Total orden = totalOrden + producto.precio
                }

                return totalVenta;
            }

            mostrarOrden() {
                let productosOrden= '';
                for( let producto of this._productos ) {
                    productosOrden += producto.toString() + ' ';
                }
                console.log(`Orden ${this._idOrden}, Total: ${this.calcularTotal()}, productos: ${this.productosOrden}`);
            }

        }

        let producto1 = new Producto('Pantalón', 200);
        let producto2 = new Producto('Camisa', 100);

        let orden1 = new Orden();
        orden1.agregarProducto( producto1 );
        orden1.agregarProducto( producto2 );

        orden1.mostrarOrden();
    </script>
</body>
</html>
