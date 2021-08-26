console.log('ready');

function sumar() {
    let formulario = document.forms['forma'];
    let a = formulario['operandoA'];
    let b = formulario['operandoB'];
    let suma = parseInt(a.value) + parseInt(b.value);
    document.getElementById('resultado').innerHTML = `El resultado de la suma es ${suma}`;
    if(isNaN(suma)) {
        document.getElementById('resultado').innerHTML = `No se han encontrado valores`;
    }
}
