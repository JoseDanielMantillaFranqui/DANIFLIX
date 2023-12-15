import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useVideo } from '../hooks/useVideo'
import { BiSolidShow, BiSolidHide } from 'react-icons/bi'

import '../index.css'

const VideoContainer = styled.main`
    padding: 8rem 0;
    background-color:#252121;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    @media screen and (max-height: 400px) {
          height: max-content;
    }
`

const StyledVideo = styled.iframe`
    width: 70%;
    height: 500px;
    border-radius: 20px;
    border: none;
    box-shadow: 0 0 10px black;
    @media screen and (max-width:600px) {
        width: 90%;
        height: 200px;
    }
    @media screen and (min-width: 601px) and (max-width: 900px) {
        width: 90%;
        height: 300px;
    }
`

const VideoTitle = styled.h3`
    font-size:2rem;
    text-align: start;
    width: 70%;
    color: #fe5353;
    text-shadow: 0 0 10px red;
    @media screen and (max-width: 900px) {
        width: 90%;
    }
`

const VideoTitleDescription = styled.h4`
    font-size:1.5rem;
    text-align: start;
    width: 70%;
    color: #cecece;
    text-shadow: 0 0 10px #f9fdfd48;
    @media screen and (max-width: 900px) {
        width: 80%;
    }
`

const ShowDescriptionIcon = styled(BiSolidShow)`
font-size: 2rem;
color: #fff; 
cursor: pointer;
`

const HideDescriptionIcon = styled(BiSolidHide)`
font-size: 2rem;
color: #ffffff73; 
cursor: pointer;
`

const Video = () => {
  const { id } = useParams()

  const { idDeYouTube, metaData, showDescription, handleShowDescription } = useVideo({ id })

  const src = `https://www.youtube.com/embed/${idDeYouTube.Link}`
  return (
    <VideoContainer>
      <StyledVideo src={src} allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
      <VideoTitle>{metaData.title}</VideoTitle>
      <VideoTitleDescription>Descripción:</VideoTitleDescription>
      {showDescription === true ? <ShowDescriptionIcon onClick={handleShowDescription} /> : <HideDescriptionIcon onClick={handleShowDescription} />}
      <p className={showDescription === true ? 'show' : 'hidden'}>{metaData.description}</p>
    </VideoContainer>
  )
}

export default Video
