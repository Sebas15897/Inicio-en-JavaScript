const personas = [
    new Persona('Sebastián', 'Contreras'),
    new Persona('Shadia', 'Montaño')
]
console.log(personas);

function mostrarPersonas() {
    let texto = '';
    for( let persona of personas ) {
        console.log(persona);
        texto += `<li>${persona.idPersona}) ${persona.nombre} ${persona.apellido}<li>`;
    }
    document.getElementById('elementos').innerHTML = texto;
}

function agregarPersonas() { 
    const formulario = document.forms['formulario'];
    const nombre = formulario['nombre'];
    const apellido = formulario['apellido'];
    if( nombre.value != '' && apellido.value != '' ) {
        const persona = new Persona(nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    } else {
        alert('Por favor Ingrese nombre y apellido');
        console.log('Por favor Ingrese nombre y apellido');
    }
}
