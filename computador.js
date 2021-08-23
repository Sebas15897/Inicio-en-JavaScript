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

        class DispositivoEntrada {
            constructor(tipoEntrada, marca) {
                this._tipoEntrada = tipoEntrada;
                this._marca = marca;
            }

            get tipoEntrada() {
                return this._tipoEntrada;
            }

            set tipoEntrada( tipoEntrada ) {
                this._tipoEntrada = tipoEntrada;
            }

            get marca() {
                return this._marca;
            }

            set marca( marca ) {
                this._marca = marca;
            }
        }

        class Raton extends DispositivoEntrada {
            static contadorRatones = 0;
            constructor(tipoEntrada, marca) {
                super(tipoEntrada, marca);
                this._idRaton = ++Raton.contadorRatones;
            }

            get idRaton() {
                return this._idRaton;
            }

            toString() {
                return `id: ${this._idRaton}, Tipo de entrada: ${this._tipoEntrada}, Marca: ${this._marca}`
            }
        }

        class Teclado extends DispositivoEntrada {
            static contadorTeclados = 0;
            constructor(tipoEntrada, marca) {
                super(tipoEntrada, marca);
                this._idTeclados = ++Teclado.contadorTeclados;
            }

            toString() {
                return `id: ${this._idTeclados}, Tipo de entrada: ${this._tipoEntrada}, Marca: ${this._marca}`
            }

        }

        let raton1 = new Raton('Mouse', 'Lenovo');
        console.log(raton1.toString());

        let teclado1 = new Teclado('Teclado', 'HP');
        console.log(teclado1.toString());
    </script>
</body>
</html>
