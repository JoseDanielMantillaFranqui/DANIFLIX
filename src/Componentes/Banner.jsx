import styled from "styled-components";

const StyledBanner = styled.section`
    width: 100%;
    position:absolute;
`

const StyledImage = styled.img`
    width: 100%;
`

const BannerContainer = styled.div`
    display: flex;
    width: 100%;
    height: 0;
    position: relative;
    bottom: 25rem;
    @media (max-width: 600px) {
        bottom: 7rem;
        flex-direction:column;
  }
  @media (min-width: 601px) and (max-width:900px) {
        bottom: 15rem;
        flex-direction:column;
  }
`

const BannerInfo = styled.div`
    color: white;
    width: 50%;
    margin: 0 5%;
`

const BannerVideo = styled.iframe`
    width: 500px;
    height: 280px;
    border-radius: 20px;
    @media (max-width: 900px) {
    display: none;
  }
`
 export const BannerCategoria = styled.p`
    font-family: 'Abel', sans-serif;
    font-size: 4rem;
    font-weight: 500;
    text-shadow: 2px 2px 5px #e81111;
    background-color: #000000;
    color: #bb3333;
    padding: 0 10px 0 10px;
    border-radius: 15px;
    margin-bottom: 2rem;
    width:max-content;
    @media (max-width: 900px) {
    display: none;
  }
`

const BannerTituloVideo = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    @media (max-width: 600px) {
        font-size: 1rem;
  }
  @media (min-width: 601px) and (max-width: 900px) {
        font-size: 2rem;
  }
`

const BannerDescripcionVideo = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    @media (max-width: 900px) {
    display: none;
  }
`

const BannerVideoMobileLink = styled.a`
    
    display:none;
    @media (max-width: 600px) {
    display: block;
    border: 1px solid #d12323;
    color: #d12323;
    margin-left: 1rem;
    width:27%;
    padding: 0.5rem;
  }
  @media (min-width: 601px) and (max-width: 900px) {
    display: block;
    border: 1px solid #d12323;
    color: #d12323;
    font-size: 2rem;
    width:max-content;
    height: max-content;
    margin-left:3rem;
    padding: 0.5rem;
  }
`

const Banner = () => {
    return <StyledBanner>
        <StyledImage src="/img/banner.png"/>
        <BannerContainer>
            <BannerInfo>
                <BannerCategoria>Ciencia</BannerCategoria>
                <BannerTituloVideo>¿Cómo funciona una bola de plasma?</BannerTituloVideo>
                <BannerDescripcionVideo>¡Bienvenidos a este fascinante viaje al mundo de la ciencia y la electricidad! Hoy, vamos a adentrarnos en el asombroso funcionamiento de una lámpara de plasma, un dispositivo que desafía las leyes de la física y nos ofrece un espectáculo de luces y colores inigualable. Descubriremos cómo la electricidad y el gas se combinan para crear este fenómeno asombroso que ilumina no solo nuestras habitaciones, ¡sino también nuestra curiosidad científica! </BannerDescripcionVideo>
            </BannerInfo>
            <BannerVideo src="https://www.youtube.com/embed/NGwq35626sU?si=HMtuuvq736kp1XPX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>
            <BannerVideoMobileLink href="https://youtu.be/NGwq35626sU?si=AhW89VBWghzxucnE">Ver Video</BannerVideoMobileLink>
        </BannerContainer>
    </StyledBanner>
}

export default Banner