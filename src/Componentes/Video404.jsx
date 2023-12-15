import styled from 'styled-components'
import video404 from '../assets/video/video404.mp4'

const StyledVideo404 = styled.video`
    width:100%;
`

const StyledContainer = styled.section`
    @media (max-width:900px) {
        background: black;
        padding: 15rem 0;
    }
`

const Video404 = () => {
  return (
    <StyledContainer>
      <StyledVideo404 src={video404} autoPlay muted loop />
    </StyledContainer>
  )
}

export default Video404
