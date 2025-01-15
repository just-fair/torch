import React from "react";
import "../styles/picsarrows.css";

export const LeftArrow = ({ onClick }) => {
  return (
    <div className="pics-arrow left-arrow" onClick={onClick}>
      <i className="ri-arrow-left-s-line"></i>
    </div>
  );
};

export const RightArrow = ({ onClick }) => {
  return (
    <div className="pics-arrow right-arrow" onClick={onClick}>
      <i className="ri-arrow-right-s-line"></i>
    </div>
  );
};
