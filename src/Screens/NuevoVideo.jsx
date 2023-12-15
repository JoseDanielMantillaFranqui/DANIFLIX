import Header from '../Componentes/Header'
import FormularioNuevoVideo from '../Componentes/Registro/Registro-Video'
import Footer from '../Componentes/Footer'

const NuevoVideo = () => {
  return (
    <>
      <Header showBtn={false} />
      <FormularioNuevoVideo />
      <Footer />
    </>
  )
}

export default NuevoVideo
