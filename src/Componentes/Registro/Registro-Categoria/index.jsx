import styled from 'styled-components'
import { FormTitulo, BotonGuardar, BotonLimpiar } from '../Registro-Video'
import CampoTexto from '../../CampoTexto'
import { TextField } from '@mui/material'
import Tabla from '../../Tabla'
import RegistradoConExito from '../../RegistradoConExito'
import { useAddCategory } from '../../../hooks/useAddCategory'
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
  const {
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
  } = useAddCategory()

  return (
    <StyledFormNewCategory onSubmit={manejarEnvioDatos}>
      {success === true && <RegistradoConExito titulo='Se ha agregado una categoria con éxito' />}
      <FormTitulo>Nueva Categoria</FormTitulo>
      <CampoTexto label='Nombre' value={nombreCategoria.value} manejarChange={manejarChangeNombreCategoria} manejarBlur={manejarBlurNombreCategoria} isValid={nombreCategoria.valid} helperText='Ingresa al menos tres caracteres' />
      <Textarea
        id='filled-textarea'
        label='Descripcion de Categoria'
        placeholder='Escriba una descripción de la categoría a crear'
        multiline
        variant='filled'
        value={descripcion.value}
        onChange={manejarChangeDescripcionCategoria}
        onBlur={manejarBlurDescripcionCategoria}
        error={descripcion.valid === false}
        helperText={descripcion.valid === false ? 'Debe escribir más de 10 caracteres y menos de 100' : ''}
      />
      <BotonesContenedor>
        <BotonGuardar variant='contained' type='submit'>Guardar</BotonGuardar>
        <BotonLimpiar
          variant='contained'
          onClick={limpiarValoresInputs}
        >Limpiar
        </BotonLimpiar>
      </BotonesContenedor>
      <Tabla data={data.categorias} manejarClickEliminarCategoria={manejarClickEliminarCategoria} />
    </StyledFormNewCategory>
  )
}

export default FormularioNuevaCategoria
