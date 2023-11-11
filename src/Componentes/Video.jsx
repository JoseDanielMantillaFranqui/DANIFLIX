import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { buscar, extraerMetaDatosDeVideo } from "../datos";

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
    text-align: center;
    width: 70%;
    color: #fe5353;
    text-shadow: 0 0 10px red;
    @media screen and (max-width: 900px) {
        width: 90%;
    }
`

const VideoTitleDescription = styled.h4`
    font-size:1.5rem;
    text-align: center;
    width: 70%;
    color: #cecece;
    text-shadow: 0 0 10px #f9fdfd48;
    @media screen and (max-width: 900px) {
        width: 80%;
    }
`

const VideoDescription = styled.p`
    width: 70%;
    color: #fff;
    word-wrap: break-word;
    @media screen and (max-width: 900px) {
        width: 90%;
    }
`

const Video = () => {

    const [idDeYouTube, setIdDeYoutube] = useState('')
    const [metaData, setMetaData] = useState({});
    const apiKey = "AIzaSyC31MFT5CrNv9Z48az6AUJtUGzEGLt9KmM";
    const { id } = useParams();

    useEffect(() => {
        buscar(`/videos/${id}`, setIdDeYoutube)
    }, [])

    useEffect(() => {
        extraerMetaDatosDeVideo(`videos?id=${idDeYouTube.Link}&part=snippet&key=${apiKey}`, setMetaData)
        console.log(metaData)
    }, [idDeYouTube])

    const src = `https://www.youtube.com/embed/${idDeYouTube.Link}`
    return <VideoContainer>
        <StyledVideo src={src} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        <VideoTitle>{metaData.title}</VideoTitle>
        <VideoTitleDescription>Descripción:</VideoTitleDescription>
        <VideoDescription>{metaData.description}</VideoDescription>
    </VideoContainer>
}

export default Video