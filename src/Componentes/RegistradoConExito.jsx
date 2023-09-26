import styled from "styled-components";
import {FaCheckCircle} from "react-icons/fa"

const StyledExitoContainer = styled.section`
    background-color: #000000be;
    width: 500px;
    height: 300px;
    position: fixed;
    top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction:column;
  align-items: center;
  z-index:1;
  padding: 2rem 0;

  @media (max-width:900px) {
    width: 80%;
    height: max-content;
  }
`

const IconoExito = styled(FaCheckCircle)`
    font-size: 5rem;
    color:green;
    margin-bottom: 2rem;
`

const StyledP = styled.p`
    color: green;
    text-shadow: 0 0 10px #2fff00;
    font-size: 3rem;
    text-align: center;
`

const RegistradoConExito = (props) => {
    const {titulo, success} = props
    return <StyledExitoContainer success={success}>
        <IconoExito />
        <StyledP>{titulo}</StyledP>
    </StyledExitoContainer>
}

export default RegistradoConExito