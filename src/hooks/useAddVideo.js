import { useState, useEffect } from 'react'
import { validarLink, validarCategoria } from '../Componentes/Registro/Registro-Video/validaciones'
import { v4 as generadorID } from 'uuid'
import { enviarDatos } from '../datos'

export const useAddVideo = () => {
  const [link, setLink] = useState({ value: '', valid: null })
  const [categoria, setCategoria] = useState({ value: '', valid: null })
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (success) {
      // Si success es true, programamos un timeout para volverlo a false después de 5 segundos.
      const timer = setTimeout(() => {
        setSuccess(false)
      }, 5000) // 5000 milisegundos = 5 segundos

      // Limpia el timeout si el componente se desmonta antes de que expire el tiempo.
      return () => clearTimeout(timer)
    }
  }, [success]) // Se ejecutará cuando el estado success cambie.

  const manejarChangeLink = (e) => {
    setLink({ value: e.target.value, valid: null })
  }

  const manejarBlurLink = (e) => {
    setLink({ value: e.target.value, valid: validarLink(e.target.value) })
  }

  const manejarChangeCategoria = (e) => {
    setCategoria({ value: e.target.value, valid: null })
  }

  const manejarBlurCategoria = (e) => {
    setCategoria({ value: e.target.value, valid: validarCategoria(e.target.value) })
  }

  const manejarEnvioDatos = (e) => {
    e.preventDefault()
    const isLinkValid = validarLink(link.value)
    setLink({ value: link.value, valid: isLinkValid })
    const isCategoryValid = validarCategoria(categoria.value)
    setCategoria({ value: categoria.value, valid: isCategoryValid })
    if (link.valid === true && categoria.valid) {
      const datosAEnviar = {
        Link: link.value,
        Categoria: categoria.value,
        id: generadorID()
      }
      enviarDatos('/videos', datosAEnviar,
        (respuesta) => {
          console.log('Solicitud POST exitosa:', respuesta)
          setSuccess(true)
          // Realizar acciones adicionales en caso de éxito
        },
        (error) => {
          console.error('Solicitud POST fallida:', error)
          // Manejar el error de la solicitud
        })
    } else {
      console.log('EL link es', link.valid, 'y la categoria es', categoria.valid)
    }
  }

  const limpiarValoresInputs = () => {
    setCategoria({ value: '', valid: null })
    setLink({ value: '', valid: null })
  }

  return {
    link,
    categoria,
    success,
    manejarChangeLink,
    manejarBlurLink,
    manejarChangeCategoria,
    manejarBlurCategoria,
    manejarEnvioDatos,
    limpiarValoresInputs
  }
}
