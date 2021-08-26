console.log('ready');

function sumar() {
    let formulario = document.forms['forma'];
    let a = formulario['operandoA'];
    let b = formulario['operandoB'];
    let sumar = parseInt(a.value) + parseInt(b.value);
    document.getElementById('resultado').innerHTML = `El resultado de la suma es: ${sumar}`;
}
