import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

import una from "../assets/imgs/TorchPics/una.JPG";
import pangalawa from "../assets/imgs/TorchPics/pangalawa.JPG";
import pangatlo from "../assets/imgs/TorchPics/pangatlo.JPG";
import pangApat from "../assets/imgs/TorchPics/pang-apat.JPG";
import pangLima from "../assets/imgs/TorchPics/pang-lima.JPG";

import "../styles/torchpicsslider.css";
import { RightArrow, LeftArrow } from "../components/PicsNavigation";

export default function SimpleSlider() {
  const images = [una, pangatlo, pangalawa, pangApat, pangLima];

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    // speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    waitForAnimate: true,
    pauseOnHover: false,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
  };

  return (
    <div id="torch-pics-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="picture-container" key={index}>
            <img src={image} alt="Torch Pics" className="fade-slide" />
            <h1 className="torch">TORCH</h1>
          </div>
        ))}
      </Slider>
    </div>
  );
}
