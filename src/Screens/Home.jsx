import Header from "../Componentes/Header";
import Banner from "../Componentes/Banner";
import Footer from "../Componentes/Footer";
import Carrusel from "../Componentes/Home-Carrusel/Carrusel";
//import data from "../datos/datos-iniciales.json";
import { buscar } from "../datos";
import { useState, useEffect } from "react";

const Home = () => {


  const [isMobile, setIsMobile] = useState(false);
  const [data, setData] = useState({ "categorias":[] });

  useEffect(() => {
   buscar(`/db`, setData)
}, [])

  console.log(data)
  const categorias = data.categorias;
  const carruseles = categorias;

  useEffect(() => {
    // Función para comprobar si el ancho de pantalla es menor que 480px
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 900);
    };

    // Verificar el tamaño de la pantalla inicialmente y cuando cambie
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Limpieza del evento cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <>
      <Header showBtn={true}/>
      <Banner />
      {carruseles.map((categoria, index) => {
                const videosCategoria = data.videos.filter(
                  (video) => video.Categoria === categoria.nombre
                );
        return <Carrusel
          key={categoria}
          DatosCarrusel={videosCategoria}
          marginTop={index === 0 ? 32 : undefined}
          marginTopMobile={index === 0 ? 8 : undefined}
          marginTopTablet={index === 0 ? 20 : undefined }
          categoriaProp={index === 0 && !isMobile ? undefined : categoria.nombre}
        />
})}
      <Footer />
    </>
  );
};

export default Home;
