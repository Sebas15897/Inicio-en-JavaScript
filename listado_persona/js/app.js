const personas = [
    new Persona('Sebastián', 'Contreras'),
    new Persona('Shadia', 'Montaño')
]

console.log(personas);

function mostrarPersonas() {
    let texto = '';
    for( let persona of personas ) {
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona() {
    const formulario = document.forms['forma'];
    const nombre = formulario['nombre'];
    const apellido = formulario['apellido'];
    const persona = new Persona(nombre.value, apellido.value);
    personas.push(persona);
    mostrarPersonas();
}
