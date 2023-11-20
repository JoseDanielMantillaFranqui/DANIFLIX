import styled from "styled-components"
import CampoTexto from "../../CampoTexto"
import SelectCategoria from "../../CampoSelect"
import RegistradoConExito from "../../RegistradoConExito"
import { Button } from "@mui/material"
import { useState, useEffect } from "react"
import { validarLink, validarCategoria } from "./validaciones"
import { Link } from "react-router-dom"
import { enviarDatos } from "../../../datos"
import { v4 as generadorID } from "uuid"

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

    const [ link, setLink ] = useState({ value:"", valid:null })
    const [ categoria, setCategoria ] = useState({ value:"", valid:null })
    const [ success, setSuccess ] = useState(false)

    
  useEffect(() => {
    if (success) {
      // Si success es true, programamos un timeout para volverlo a false después de 5 segundos.
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 5000); // 5000 milisegundos = 5 segundos

      // Limpia el timeout si el componente se desmonta antes de que expire el tiempo.
      return () => clearTimeout(timer);
    }
  }, [success]); // Se ejecutará cuando el estado success cambie.
    
    return <StyledFormNewVideo onSubmit={(e) => {
        e.preventDefault()
        const isLinkValid = validarLink(link.value)
        setLink({value:link.value, valid:isLinkValid})
        const isCategoryValid = validarCategoria(categoria.value)
        setCategoria({value:categoria.value, valid:isCategoryValid})
        if (link.valid === true && categoria.valid) {
            const datosAEnviar = {
                "Link": link.value,
                "Categoria": categoria.value,
                "id":generadorID()
            }
            enviarDatos(`/videos`, datosAEnviar, 
                (respuesta) => {
                    console.log("Solicitud POST exitosa:", respuesta);
                    // Realizar acciones adicionales en caso de éxito
                },
                (error) => {
                    console.error("Solicitud POST fallida:", error);
                    // Manejar el error de la solicitud
                }
                );
            setSuccess(true);
        } else {
            console.log("EL link es",link.valid, "y la categoria es", categoria.valid)
        }
        
    }}>
        {success === true && <RegistradoConExito titulo="Se ha agregado un video con éxito"/>}
        <FormTitulo>NUEVO VIDEO</FormTitulo>
        <CampoTexto label="ID del Video" value={link.value} setValue={setLink} isValid={link.valid} helperText="Ingresa un ID de video de YT válido" validator={validarLink}/>
        <SelectCategoria value={categoria.value} setCategoria={setCategoria} isValid={categoria.valid}/>
        <BotonesContainer>
            <BotonesPrincipalesContainer>
                <BotonGuardar variant="contained" type="submit">Guardar</BotonGuardar>
                <BotonLimpiar variant="contained" onClick={() => {
                    setCategoria({ value:"", valid:null })
                    setLink({ value:"", valid:null })
                    }}>Limpiar
                </BotonLimpiar>
            </BotonesPrincipalesContainer>
            <Link to="/nuevaCategoria"><BotonNuevaCategoria variant="contained">Nueva Categoría</BotonNuevaCategoria></Link>
        </BotonesContainer>
    </StyledFormNewVideo>
}

export default FormularioNuevoVideo

