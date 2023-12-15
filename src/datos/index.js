import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://daniflix-api.onrender.com'
})

export const buscar = async (url, setData) => {
  try {
    const respuesta = await api.get(url)
    setData(respuesta.data)
  } catch (error) {
    console.error('Error al realizar la solicitud GET:', error)
  }
}

export const enviarDatos = async (url, datos, onSuccess, onError) => {
  try {
    const respuesta = await api.post(url, datos)
    if (onSuccess) {
      onSuccess(respuesta.data)
    }
  } catch (error) {
    console.error('Error al realizar la solicitud POST:', error)
    if (onError) {
      onError(error)
    }
  }
}

export const eliminarCategoria = async (url, onSuccess, onError) => {
  try {
    const respuesta = await api.delete(url)
    if (onSuccess) {
      onSuccess(respuesta.data)
    }
  } catch (error) {
    console.error('Error al realizar la solicitud POST:', error)
    if (onError) {
      onError(error)
    }
  }
}

export const apiYouTube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
})

export const extraerMetaDatosDeVideo = async (url, setData) => {
  try {
    const respuesta = await apiYouTube.get(url)
    const title = respuesta.data.items[0].snippet.title
    const description = respuesta.data.items[0].snippet.description

    const videoData = {
      title, description
    }

    setData(videoData)
  } catch (error) {
    console.error('Error al realizar la solicitud GET:', error)
  }
}
