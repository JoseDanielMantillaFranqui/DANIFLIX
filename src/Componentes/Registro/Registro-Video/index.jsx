import styled from 'styled-components'
import CampoTexto from '../../CampoTexto'
import SelectCategoria from '../../CampoSelect'
import RegistradoConExito from '../../RegistradoConExito'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { useAddVideo } from '../../../hooks/useAddVideo'

const StyledFormNewVideo = styled.form`
    width: 100%;
    padding: 10% 15%;
    display: flex;
    flex-direction: column;
    background-color: #252121;
    @media (max-width: 900px) {
        padding: 35% 5%;
    }
`

export const FormTitulo = styled.h2`
    font-size: 3rem;
    text-align: center;
    color: #cf5b5b;
    margin-bottom:3rem;
    text-shadow: 1px 1px 10px #f80000;
`

const BotonesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    @media (max-width: 900px) {
    flex-direction:column;
  }
`

const BotonesPrincipalesContainer = styled.div`
    display: flex;
`

export const BotonGuardar = styled(Button)`
    && { 
        margin-right:1rem;
        background-color: #b52c2c;
        font-family: 'Montserrat', sans-serif;
        font-size:1.5rem;
    }
    &&:hover {
        background-color: #d51f1f;
    }
    @media (max-width: 900px) {
    && {
        margin-bottom:1rem;
    }
  }
`

export const BotonLimpiar = styled(Button)`
    && {
        background-color: #cdcaca;
        font-family: 'Montserrat', sans-serif;
        font-size:1.5rem;
    }
    &&:hover{
        background-color: #927b7b;
    }
    @media (max-width: 900px) {
    && {
        margin-bottom:1rem;
    } }
`

const BotonNuevaCategoria = styled(Button)`
    && {
        background-color: #b52c2c;
        font-family: 'Montserrat', sans-serif;
        font-size:1.5rem;
    }
    &&:hover {
        background-color: #d51f1f;
    }
`

const FormularioNuevoVideo = () => {
  const {
    link,
    categoria,
    success,
    manejarChangeLink,
    manejarBlurLink,
    manejarChangeCategoria,
    manejarBlurCategoria,
    manejarEnvioDatos,
    limpiarValoresInputs
  } = useAddVideo()

  return (
    <StyledFormNewVideo onSubmit={manejarEnvioDatos}>
      {success === true && <RegistradoConExito titulo='Se ha agregado un video con éxito' />}
      <FormTitulo>NUEVO VIDEO</FormTitulo>
      <CampoTexto label='ID del Video' value={link.value} manejarChange={manejarChangeLink} manejarBlur={manejarBlurLink} isValid={link.valid} helperText='Ingresa un ID de video de YT válido' />
      <SelectCategoria value={categoria.value} manejarChange={manejarChangeCategoria} manejarBlur={manejarBlurCategoria} isValid={categoria.valid} />
      <BotonesContainer>
        <BotonesPrincipalesContainer>
          <BotonGuardar variant='contained' type='submit'>Guardar</BotonGuardar>
          <BotonLimpiar
            variant='contained' onClick={limpiarValoresInputs}
          >Limpiar
          </BotonLimpiar>
        </BotonesPrincipalesContainer>
        <Link to='/nuevaCategoria'><BotonNuevaCategoria variant='contained'>Nueva Categoría</BotonNuevaCategoria></Link>
      </BotonesContainer>
    </StyledFormNewVideo>
  )
}

export default FormularioNuevoVideo
