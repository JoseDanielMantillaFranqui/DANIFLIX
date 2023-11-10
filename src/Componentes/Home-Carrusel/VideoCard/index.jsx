import styled from "styled-components";
import { BsFillPlayBtnFill } from "react-icons/bs"
import { Link } from "react-router-dom";

const StyledVideoImage = styled.img`
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

const PlayButton = styled(BsFillPlayBtnFill)`
    position: absolute;
    font-size: 4rem;
    color: #ad1717;
    transition: .5s all;
    &:hover {
        color: #a10303;
        transform: scale(1.3);
    }
`

const LinkToVideo = styled(Link)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CardVideo = (props) => {
    const { link, id } = props
    const src = `https://img.youtube.com/vi/${link}/maxresdefault.jpg`
    const url = `/verVideo/${id}`
    return <LinkToVideo to={url}>
    <StyledVideoImage src={src} alt={`Video de Youtube con identificador ${id}`} />
    <PlayButton />
    </LinkToVideo>
}

export default CardVideo