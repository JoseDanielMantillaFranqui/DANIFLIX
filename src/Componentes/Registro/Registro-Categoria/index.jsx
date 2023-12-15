import styled from 'styled-components'
import { FormTitulo, BotonGuardar, BotonLimpiar } from '../Registro-Video'
import CampoTexto from '../../CampoTexto'
import { validarNombreCategoria, validarDescripcion } from './validaciones'
import { TextField } from '@mui/material'
import { useState, useEffect } from 'react'
import Tabla from '../../Tabla'
import RegistradoConExito from '../../RegistradoConExito'
import { enviarDatos, buscar } from '../../../datos'

import { v4 as generadorID } from 'uuid'
// import data from "../../../datos/datos-iniciales.json"

const StyledFormNewCategory = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 7% 18%;
    background-color: #252121;
    @media (max-width: 900px) {
    padding: 7% 7%;
  }
`

const BotonesContenedor = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 2rem;
    @media (max-width: 900px) {
    flex-direction:column;
  }
`

const Textarea = styled(TextField)`
      && {
    margin-bottom: 2rem;
    

    label {
      color: white;
      font-family: courier; // Cambia el color del label
      font-size:1.5rem;
    }

    textarea {
      color: #b81d1d;
      text-shadow: 1px 1px 10px #ff0000;   // Cambia el color del texto
      font-family: courier;
      font-size:1.5rem;
      padding-top: 10px; 
    }

    /* Cambia el color de la línea de subrayado */
    & .MuiInputBase-root.MuiFilledInput-root:after {
      border-bottom: 2px solid white !important;
      transform: scaleX(1); // Asegura que la línea esté visible
    }
    }
`

const FormularioNuevaCategoria = () => {
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

  return (
    <StyledFormNewCategory onSubmit={(e) => {
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
            // Realizar acciones adicionales en caso de éxito
          },
          (error) => {
            console.error('Solicitud POST fallida:', error)
            // Manejar el error de la solicitud
          }
        )
        setSuccess(true)
      } else {
        console.log('La categoria es', nombreCategoria.valid, 'La descripcion es', descripcion.valid)
      }
    }}
    >
      {success === true && <RegistradoConExito titulo='Se ha agregado una categoria con éxito' />}
      <FormTitulo>Nueva Categoria</FormTitulo>
      <CampoTexto label='Nombre' value={nombreCategoria.value} setValue={setNombreCategoria} isValid={nombreCategoria.valid} helperText='Ingresa al menos tres caracteres' validator={validarNombreCategoria} />
      <Textarea
        id='filled-textarea'
        label='Descripcion de Categoria'
        placeholder='Escriba una descripción de la categoría a crear'
        multiline
        variant='filled'
        value={descripcion.value}
        onChange={(e) => { setDescripcion({ value: e.target.value, valid: null }) }}
        onBlur={(e) => { setDescripcion({ value: e.target.value, valid: validarDescripcion(e.target.value) }) }}
        error={descripcion.valid === false}
        helperText={descripcion.valid === false ? 'Debe escribir más de 10 caracteres y menos de 100' : ''}
      />
      <BotonesContenedor>
        <BotonGuardar variant='contained' type='submit'>Guardar</BotonGuardar>
        <BotonLimpiar
          variant='contained'
          onClick={() => {
            setNombreCategoria({ value: '', valid: null })
            setDescripcion({ value: '', valid: null })
          }}
        >Limpiar
        </BotonLimpiar>
      </BotonesContenedor>
      <Tabla data={data.categorias} />
    </StyledFormNewCategory>
  )
}

export default FormularioNuevaCategoria
