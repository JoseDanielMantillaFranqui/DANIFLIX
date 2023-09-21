export const validarLink = (link) => {
    return link.length === 61 ? true : false 
}

export const validarCategoria = (categoria) => {
    return categoria.length > 1 ? true : false
}