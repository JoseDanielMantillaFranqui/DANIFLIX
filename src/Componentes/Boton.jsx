import styled from "styled-components"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"

const StyledBoton = styled(Button)`
&& {
    color: #b1a3a3;
    height: 100%;
    border-color: #b1a3a3;
    margin: 0 2rem; 
    }
&&:hover {
    color: #d52d2d;
    border-color: #d52d2d;
}
`

const StyledLink = styled(Link)`
    height: 65%;
`

const Boton = (props) => {
    return <StyledLink to={props.link}><StyledBoton variant={props.varianteBoton}>{props.nombreBoton}</StyledBoton></StyledLink>
}

export default Boton;
