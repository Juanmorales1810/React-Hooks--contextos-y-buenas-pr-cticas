export const validarNombre = (nombre) => {
    const length = nombre.length;
    return length > 2 && length < 20 ? true : false;
}

export const validarApellido = (apellido) => {
    const length = apellido.length;
        return length > 2 && length < 20 ? true : false;
}

export const validarTelefono = (telefono) => {
    const length = telefono.length;
        return length > 8 && length < 11 ? true : false;
}