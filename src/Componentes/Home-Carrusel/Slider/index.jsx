import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardVideo from "../VideoCard";

const MySlider = (props) => {
    const { DatosCarrusel } = props
    console.log("Estos son",DatosCarrusel)
      
    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 899,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 599,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    
      return <Slider {...settings}>
    {DatosCarrusel.map((video, index) => (
        <div key={index}>
          <CardVideo link={video.Link} />
        </div>
      ))}
    </Slider>
}

export default MySlider