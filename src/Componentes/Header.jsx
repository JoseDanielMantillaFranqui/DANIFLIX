import Boton from "./Boton";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    width: 100%;
    height: 100px;
`

const LogoHeader = styled.img`
    width: 100%;
    margin-left: 2rem;
    @media (max-width: 800px) {
        width: 100%;
  }
`

const LogoLink = styled(Link)`
    width: 10%;
    @media (max-width: 800px) {
        width: 30%;
  }
`

const Header = (props) => {
    const {showBtn} = props
    return <StyledHeader>
        <LogoLink to="/"><LogoHeader src="/img/logo-daniflix.png" alt="Daniflix"/></LogoLink>
        { showBtn === true ? <Boton varianteBoton="outlined" nombreBoton="Nuevo Video" link="/nuevoVideo"/> : <div></div>}
    </StyledHeader>
}

export default Header;