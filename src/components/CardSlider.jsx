import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ATEANGEL from "../assets/imgs/leaders/ATEANGEL1.jpg";
import ATEPHOEBE from "../assets/imgs/leaders/ATEPHOEBE.jpeg";
import COLLEEN from "../assets/imgs/leaders/COLLEEN.jpg";
import JELOY2 from "../assets/imgs/leaders/JELOY2.jpg";
import KUYAJHERALD from "../assets/imgs/leaders/KUYAJHERALD.jpg";
import KUYAPAUL from "../assets/imgs/leaders/KUYAPAUL.jpg";
import KUYATIAN from "../assets/imgs/leaders/KUYATIAN1.jpg";
import LEE from "../assets/imgs/leaders/LEE2.jpg";
import LOU from "../assets/imgs/leaders/LOU1.jpeg";
import MISA from "../assets/imgs/leaders/MISA1.jpg";
import PVEN from "../assets/imgs/leaders/PVEN1.jpeg";
import TINA from "../assets/imgs/leaders/TINA2.jpeg";
import TITALHEK from "../assets/imgs/leaders/TITALHEK1.jpeg";
import TITASWEET from "../assets/imgs/leaders/TITASWEET2.jpg";
import TITOLITO from "../assets/imgs/leaders/TITOLITO2.jpg";
import "../styles/cardslider.css";

import Slider from "react-slick";

const CardSlider = () => {
  const cards = [
    { src: PVEN, name: "John Oliven Rances", role: "Senior Pastor" },
    {
      src: TINA,
      name: "Kristina Cassandra Ardiente",
      role: "Associate Pastor",
    },
    { src: LOU, name: "Louie Castro Calma", role: "Junior Pastor" },
    { src: LEE, name: "Hayle Greselle L. Base", role: "Junior Pastor" },
    { src: MISA, name: "Roshell Dian F. Subillaga", role: "Junior Pastor" },
    { src: KUYAPAUL, name: "Christian Paul Salvador", role: "Elder" },
    { src: ATEPHOEBE, name: "Phoebe Kates Salvador", role: "Elder" },
    { src: TITALHEK, name: "Rosemarie Beltran", role: "Elder" },
    { src: TITASWEET, name: "Sweetheart B. Maga", role: "Elder" },
    { src: TITOLITO, name: "Angelito Maga", role: "Elder" },
    { src: KUYATIAN, name: "William Tristian Beltran", role: "Elder" },
    { src: COLLEEN, name: "Colleen Millicent C. Gane", role: "Senior Leader" },
    { src: JELOY2, name: "Heart Angelo Maga", role: "Senior Leader" },
    { src: KUYAJHERALD, name: "Mark Jherald B. Abila", role: "Senior Leader" },
    {
      src: ATEANGEL,
      name: "Maria Angela Victoria E. Beltran",
      role: "Senior Leader",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <div id="slider-container">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="box">
            <img src={card.src} alt={card.name} />
            <h3>{card.name}</h3>
            <p>{card.role}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
