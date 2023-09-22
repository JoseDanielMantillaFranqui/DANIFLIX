import styled from "styled-components";
import MySlider from "../Slider";
import { BannerCategoria } from "../../Banner";

const StyledCarrusel = styled.section`
    background-color: #212121;
    width: 100%;
    padding: 2rem 5rem;
    margin-top: ${props => props.marginTop || 0}rem; // Aplicamos el marginTop dinámicamente
    @media (max-width: 600px) {
        margin-top: ${props => props.marginTopMobile || 0}rem; 
        padding: 2rem 2rem;
  }
  @media (min-width: 601px) and (max-width:900px) {
        margin-top: ${props => props.marginTopTablet || 0}rem; 
        padding: 2rem 2rem;
  }
  @media (min-width: 901px) and (max-width:1400px) {
        margin-top: ${props => props.marginTopLaptop + 1 || 0}rem; 
        padding: 2rem 2rem;
  }
`

const CarruselCategoria = styled(BannerCategoria)`
    @media (max-width: 900px) {
        display:block;
        font-size: 3rem;
        margin-top:1rem;
    }
`

const Carrusel = (props) => {
    const { marginTop, marginTopMobile, marginTopTablet, marginTopLaptop, DatosCarrusel, categoriaProp } = props
    return <StyledCarrusel marginTop={marginTop} marginTopMobile={marginTopMobile} marginTopTablet={marginTopTablet} marginTopLaptop={marginTopLaptop} >
        { categoriaProp === undefined ? <div></div> : <CarruselCategoria>{categoriaProp}</CarruselCategoria> }
        <MySlider DatosCarrusel={DatosCarrusel}/>
    </StyledCarrusel>
}

export default Carrusel;
