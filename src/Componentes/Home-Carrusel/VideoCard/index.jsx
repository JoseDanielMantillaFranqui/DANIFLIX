import styled from "styled-components";

const StyledVideo = styled.iframe`
    width: 440px;
    height: 220px;
    border-radius: 20px;
    border: none;
    box-shadow: 0 0 10px black;
    @media (max-width: 900px) {
        width: 320px;
        height: 180px;
  }
  @media (min-width: 901px) and (max-width: 1400px) {
        width: 350px;
        height: 180px;
  }
`

const CardVideo = (props) => {
    const { link } = props
    const src = `https://www.youtube.com/embed/${link}`
    return <StyledVideo src={src} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
}

export default CardVideo