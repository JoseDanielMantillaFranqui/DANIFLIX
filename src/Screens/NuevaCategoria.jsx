import Header from '../Componentes/Header'
import FormularioNuevaCategoria from '../Componentes/Registro/Registro-Categoria'
import Footer from '../Componentes/Footer'

const NuevaCategoria = () => {
  return (
    <>
      <Header showBtn={false} />
      <FormularioNuevaCategoria />
      <Footer />
    </>
  )
}

export default NuevaCategoria
