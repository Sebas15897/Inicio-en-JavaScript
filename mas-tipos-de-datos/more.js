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
        * Tipos de datos en Js  
        * Soy Sebastián </>
        */

        //String

        let leche = "leche";
        let chocolate = true;

        if (chocolate == true) {
            console.log(leche, "con chocolate");
        } else {
            console.log("No contiene leche con chocolate");
        }

        //tipo de dato function

        function leches() {
            //Haciendo leche con chocolate
            let leche_con_chocolate = false;
            if (leche_con_chocolate == true) {
                console.log("tenemos leche con chocolate");
            } else {
                console.log("no tenemos leche con chocolate");
            }
        }

        leches();

        //tipo de dato simbolo
        let simbolo = Symbol("Mi simbolo");

        //tipo de clase
        class persona {
            constructor(nombre, apellido){
                this.nombre = nombre;
                this.apellido = apellido;
            }
        }

        console.log(persona);

        //tipo undefined
        let s;
        console.log(s);

        //Null = ausencia de valor
        let y = null;
        console.log(y);

        var autos = ["Audi", "Porche", "Ferrary", "BMW"];
        console.log(autos);
    </script>
</body>
</html>
