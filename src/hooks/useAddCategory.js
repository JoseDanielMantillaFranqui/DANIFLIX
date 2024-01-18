import { useState, useEffect } from 'react'
import { validarNombreCategoria, validarDescripcion } from '../Componentes/Registro/Registro-Categoria/validaciones'
import { buscar, enviarDatos, eliminarCategoria } from '../datos'
import { v4 as generadorID } from 'uuid'

export const useAddCategory = () => {
  const [data, setData] = useState({ categorias: [] })

  useEffect(() => {
    buscar('/db', setData)
  }, [])

  const [nombreCategoria, setNombreCategoria] = useState({ value: '', valid: null })
  const [descripcion, setDescripcion] = useState({ value: '', valid: null })
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

  const manejarEnvioDatos = (e) => {
    e.preventDefault()
    const isCategoryValid = validarNombreCategoria(nombreCategoria.value)
    setNombreCategoria({ value: nombreCategoria.value, valid: isCategoryValid })
    const isDescriptionValid = validarDescripcion(descripcion.value)
    setDescripcion({ value: descripcion.value, valid: isDescriptionValid })

    if (nombreCategoria.valid === true && descripcion.valid === true) {
      const datosAEnviar = {
        nombre: nombreCategoria.value,
        descripcion: descripcion.value,
        id: generadorID()
      }
      enviarDatos('/categorias', datosAEnviar,
        (respuesta) => {
          console.log('Solicitud POST exitosa:', respuesta)
          setSuccess(true)
          buscar('/db', setData)
        // Realizar acciones adicionales en caso de éxito
        },
        (error) => {
          console.error('Solicitud POST fallida:', error)
        // Manejar el error de la solicitud
        }
      )
    } else {
      console.log('La categoria es', nombreCategoria.valid, 'La descripcion es', descripcion.valid)
    }
  }

  const limpiarValoresInputs = () => {
    setNombreCategoria({ value: '', valid: null })
    setDescripcion({ value: '', valid: null })
  }

  const manejarChangeNombreCategoria = (e) => {
    setNombreCategoria({ value: e.target.value, valid: null })
  }

  const manejarBlurNombreCategoria = (e) => {
    setNombreCategoria({ value: e.target.value, valid: validarNombreCategoria(e.target.value) })
  }

  const manejarChangeDescripcionCategoria = (e) => {
    setDescripcion({ value: e.target.value, valid: null })
  }

  const manejarBlurDescripcionCategoria = (e) => {
    setDescripcion({ value: e.target.value, valid: validarDescripcion(e.target.value) })
  }

  const manejarClickEliminarCategoria = (categoriaKey) => {
    eliminarCategoria(`/categorias/${categoriaKey.id}`,
      (data) => {
        console.log('Categoría eliminada exitosamente:', data)
        buscar('/db', setData)
        // Realiza cualquier acción adicional que necesites aquí después de eliminar la categoría.
      },
      (error) => {
        console.error('Error al eliminar la categoría:', error)
        // Maneja el error de acuerdo a tus necesidades.
      }
    )
  }

  return {
    data,
    nombreCategoria,
    descripcion,
    success,
    manejarEnvioDatos,
    limpiarValoresInputs,
    manejarClickEliminarCategoria,
    manejarChangeNombreCategoria,
    manejarBlurNombreCategoria,
    manejarChangeDescripcionCategoria,
    manejarBlurDescripcionCategoria
  }
}
