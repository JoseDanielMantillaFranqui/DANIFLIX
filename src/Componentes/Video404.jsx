import styled from 'styled-components'

const StyledContainer = styled.section`
  width: 100%;
  height:40vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/background-404.gif');
  background-color: #908d8d;
  background-blend-mode: soft-light;
  background-position: center;

  &:active {
    filter: invert(1);
  }

  @media screen and (max-width:480px) {
    height: 200vw;
    width: 100vw;
  }

  @media screen and (min-width:481px) and (max-width: 999px) {
    width: 100%;
    height: 150vw;
  }
`

const ErrorContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: #fdfdfd8f;
  backdrop-filter: blur(3px);
  border-radius: 30px;
  @media screen and (max-width:480px) {
    width: 90%
  }

  @media screen and (min-width:481px) and (max-width: 999px) {
    width: 70%;
  }
`

const ErrorCodigo = styled.p`
  color: #353232;
  font-size: 3rem;
  font-weight: 700;

`

const ErrorDescripcion = styled.p`
  color: #353535;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;


`

const Video404 = () => {
  return (
    <StyledContainer>
      <ErrorContainer>
        <ErrorCodigo>Error 404</ErrorCodigo>
        <ErrorDescripcion>El recurso solicitado no existe.</ErrorDescripcion>
      </ErrorContainer>
    </StyledContainer>
  )
}

export default Video404
