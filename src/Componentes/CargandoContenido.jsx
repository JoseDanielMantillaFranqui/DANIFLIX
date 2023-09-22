import styled from "styled-components";
import { CircularProgress } from "@mui/material";

const StyledCargandoContainer = styled.section`
    margin-top: 37rem;
    width:100%;
    padding: 15rem 5rem;
    background-color: #252121;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 600px) {
        margin-top: 8rem;
        padding: 12rem 5rem;
    }
    @media (min-width: 601px) and (max-width: 900px) {
        margin-top: 15rem;
        padding: 12rem 5rem;
    }
    @media (min-width: 901px) and (max-width:1500px) {
        margin-top: 23rem;
        padding: 12rem 5rem;
    }
`

const StyledCargandoTitulo = styled.h2`
    font-size: 3rem;
    color: #cf5b5b;
    margin-bottom:3rem;
    text-shadow: 1px 1px 10px #f80000;
`

const StyledCargandoCirculo = styled(CircularProgress)`
    &&{color: #b73d3d;}
`

const CargandoContenido = () => {
    return <StyledCargandoContainer>
        <StyledCargandoTitulo>Cargando...</StyledCargandoTitulo>
        <StyledCargandoCirculo color="inherit" size={100}/>
    </StyledCargandoContainer>
}

export default CargandoContenido