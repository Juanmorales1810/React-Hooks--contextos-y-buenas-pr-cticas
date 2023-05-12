

export const validarDireccion = (direccion) => {
    return direccion.length >= 50 ? false : true
}
export const validarCiudad = (ciudad) => {
    return ciudad.length >= 20 ? false : true
}
export const validarEstado = (estado) => {
    return estado.length >= 20 ? false : true
}