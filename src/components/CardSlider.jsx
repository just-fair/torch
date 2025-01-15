import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import ANGEL from "../assets/imgs/leaders/ANGEL1.jpg";
import PHOEBE from "../assets/imgs/leaders/PHOEBE2.jpg";
import COLLEEN from "../assets/imgs/leaders/COLLEEN1.jpg";
import JELOY from "../assets/imgs/leaders/JELOY1.jpg";
import PAUL from "../assets/imgs/leaders/PAUL1.jpg";
import TIAN from "../assets/imgs/leaders/TIAN1.jpg";
import HAYLE from "../assets/imgs/leaders/HAYLE1.jpg";
import LOUIE from "../assets/imgs/leaders/LOUIE1.jpg";
import ROSHELL from "../assets/imgs/leaders/ROSHELL2.jpg";
import PVEN from "../assets/imgs/leaders/P.VEN1.jpg";
import TINA from "../assets/imgs/leaders/TINA1.jpg";
import LHEK from "../assets/imgs/leaders/LHEK1.jpg";
import SWEETHEART from "../assets/imgs/leaders/SWEETHEART1.jpg";
import LITO from "../assets/imgs/leaders/LITO1.jpg";
import DANIELA from "../assets/imgs/leaders/DANIELA1.jpg";
import MICHELLE from "../assets/imgs/leaders/MICHELLE2.jpg";

import "../styles/cardslider.css";

import Slider from "react-slick";
import { PrevArrow, NextArrow } from "../components/CustomArrows";

const CardSlider = () => {
  const cards = [
    { src: SWEETHEART, name: "Sweetheart B. Maga", role: "Elder" },
    { src: LITO, name: "Angelito Maga", role: "Elder" },
    { src: LHEK, name: "Rosemarie Beltran", role: "Elder" },
    { src: PHOEBE, name: "Phoebe Kates Salvador", role: "Elder" },
    { src: PAUL, name: "Christian Paul Salvador", role: "Elder" },
    { src: PVEN, name: "John Oliven Rances", role: "Senior Pastor" },
    { src: TIAN, name: "William Tristian Beltran", role: "Senior Leader" },
    {
      src: ANGEL,
      name: "Maria Angela Victoria E. Beltran",
      role: "Senior Leader",
    },
    {
      src: TINA,
      name: "Kristina Cassandra Ardiente",
      role: "Associate Pastor",
    },
    { src: LOUIE, name: "Louie Castro Calma", role: "Associate Pastor" },
    {
      src: ROSHELL,
      name: "Roshell Dian F. Subillaga",
      role: "Associate Leader",
    },
    { src: HAYLE, name: "Hayle Greselle L. Base", role: "Associate Leader" },
    {
      src: COLLEEN,
      name: "Colleen Millicent C. Gane",
      role: "Associate Leader",
    },
    {
      src: DANIELA,
      name: "Daniela Joyce Guinoo",
      role: "Associate Leader",
    },
    {
      src: MICHELLE,
      name: "Michelle Ann E. Abaño",
      role: "Associate Leader",
    },
    { src: JELOY, name: "Heart Angelo Maga", role: "Associate Leader" },
  ];

  const [play, setPlay] = useState(true);

  const settings = {
    dots: false,
    infinite: true,
    // speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    cssEase: "linear",
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
