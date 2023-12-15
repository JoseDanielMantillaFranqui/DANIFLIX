import { useVideos } from '../../hooks/useVideos'
import { useScreen } from '../../hooks/useScreen'
import CargandoContenido from '../CargandoContenido'
import Carrusel from './Carrusel'

const RenderCarrusel = () => {
  const { isMobile } = useScreen()
  const { data, tieneVideos } = useVideos()
  const carruseles = data.categorias
  const videos = data.videos

  if (!tieneVideos) {
    return <CargandoContenido />
  }

  return carruseles.map((categoria, index) => {
    const videosCategoria = videos.filter(
      (video) => video.Categoria === categoria.nombre
    )

    return (
      <Carrusel
        key={categoria.id}
        DatosCarrusel={videosCategoria}
        marginTop={index === 0 ? 32 : undefined}
        marginTopMobile={index === 0 ? 8 : undefined}
        marginTopTablet={index === 0 ? 20 : undefined}
        marginTopLaptop={index === 0 ? 25 : undefined}
        categoriaProp={index === 0 && !isMobile ? undefined : categoria.nombre}
      />
    )
  })
}

export default RenderCarrusel
