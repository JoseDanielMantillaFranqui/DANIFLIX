import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { buscar } from "../datos";

const VideoContainer = styled.main`
    padding: 8rem 0;
    background-color:#252121;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-height: 400px) {
          height: 170vh;
    }
`

const StyledVideo = styled.iframe`
    width: 70%;
    height: 100%;
    border-radius: 20px;
    border: none;
    box-shadow: 0 0 10px black;
    @media screen and (max-width:600px) {
        width: 90%;
        height: 50%;
    }
    @media screen and (min-width: 601px) and (max-width: 900px) {
        width: 90%;
    }
`

const Video = () => {

    const [idDeYouTube, setIdDeYoutube] = useState('')
    const { id } = useParams()

    useEffect(() => {
        buscar(`/videos/${id}`, setIdDeYoutube)
    },[id])

    const src = `https://www.youtube.com/embed/${idDeYouTube.Link}`
    return <VideoContainer>
        <StyledVideo src={src} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
    </VideoContainer>
}

export default Video