export const validarNombreCategoria = (nombreCategoria) => {
    return nombreCategoria.length > 2 ? true : false
}

export const validarDescripcion = (descripcion) => {
    return descripcion.length > 10 && descripcion.length < 100 ? true : false
}