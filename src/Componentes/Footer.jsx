import styled from 'styled-components'

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #252121;
    padding: 2rem 0;
    border-top: 2px solid #c54141;
    @media (max-width: 800px) {
        
  }
`

const LogoFooter = styled.img`
    width: 17%;
    @media (max-width: 800px) {
        width: 30%;
  }
    
`

const Footer = () => {
  return (
    <StyledFooter>
      <LogoFooter src='/img/logo-daniflix.png' alt='Daniflix' />
    </StyledFooter>
  )
}

export default Footer
