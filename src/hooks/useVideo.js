import { useState, useEffect } from 'react'
import { buscar, extraerMetaDatosDeVideo } from '../datos'

export const useVideo = ({ id }) => {
  const [idDeYouTube, setIdDeYoutube] = useState({})
  const [metaData, setMetaData] = useState({})
  const [showDescription, setShowDescription] = useState(false)
  const apiKey = 'AIzaSyC31MFT5CrNv9Z48az6AUJtUGzEGLt9KmM'

  useEffect(() => {
    buscar(`/videos/${id}`, setIdDeYoutube)
    // eslint-disable-next-line
    }, [])

  useEffect(() => {
    idDeYouTube.Link && extraerMetaDatosDeVideo(`videos?id=${idDeYouTube.Link}&part=snippet&key=${apiKey}`, setMetaData)
  }, [idDeYouTube])

  const handleShowDescription = () => {
    setShowDescription(!showDescription)
  }

  return {
    idDeYouTube, metaData, showDescription, handleShowDescription
  }
}
