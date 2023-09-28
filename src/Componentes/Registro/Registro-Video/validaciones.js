export const validarLink = (link) => {
    return link.length === 11 ? true : false 
}

export const validarCategoria = (categoria) => {
    return categoria.length > 1 ? true : false
}