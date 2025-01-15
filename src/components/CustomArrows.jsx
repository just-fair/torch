import React from "react";
import "../styles/arrows.css";

export const PrevArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <i className="ri-arrow-left-s-line"></i>
    </div>
  );
};

export const NextArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <i className="ri-arrow-right-s-line"></i>
    </div>
  );
};
