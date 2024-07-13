import React from "react";

const Banner = ({ image, subtitle, title, price }) => {
  return (
    <div className="slider-item">
      <img src={image} alt={title} className="banner-img" />

      <div className="banner-content">
        <p className="banner-subtitle">{subtitle}</p>

        <h2 className="banner-title">{title}</h2>

        <p className="banner-text">
          starting at &dollar; <b>{price}</b>.00
        </p>

        <a href="#" className="banner-btn">
          Shop now
        </a>
      </div>
    </div>
  );
};

export default Banner;
