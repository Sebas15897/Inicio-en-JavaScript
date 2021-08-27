class Persona{
    static contador = 0;
    constructor(nombre, apellido) {
        this._idPersona = ++Persona.contador;
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get idPersona () {
        return this._idPersona;
    }
    get nombre () {
        return this._nombre;
    }
    set nombre ( nombre ) {
        this._nombre = nombre;
    }
    get apellido () {
        return this._apellido;
    }
    set apellido ( apellido ) {
        this._apellido = apellido;
    } 
}
