export const validarNombreCategoria = (nombreCategoria) => {
  return nombreCategoria.length > 2
}

export const validarDescripcion = (descripcion) => {
  return !!(descripcion.length > 10 && descripcion.length < 100)
}
