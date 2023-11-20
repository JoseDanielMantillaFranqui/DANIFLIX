import Header from "../Componentes/Header";
import Banner from "../Componentes/Banner";
import Footer from "../Componentes/Footer";
import RenderCarrusel from "../Componentes/Home-Carrusel/RenderCarrusel";

const Home = () => {
  return (
    <>
      <Header showBtn={true}/>
      <Banner />
      <RenderCarrusel />
      <Footer />
    </>
  );
};

export default Home;
