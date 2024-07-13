import React from "react";

const ProductShowcase = ({ product }) => {
  const { category, title, img1, img2, badge, rating, price, oldPrice } =
    product;

  return (
    <div className="showcase">
      <div className="showcase-banner">
        <img
          src={img1}
          alt={title}
          className="product-img default"
          width="300"
        />
        <img src={img2} alt={title} className="product-img hover" width="300" />

        {badge && <p className={`showcase-badge ${badge}`}>{badge}</p>}

        <div className="showcase-actions">
          <button className="btn-action">
            <ion-icon name="heart-outline"></ion-icon>
          </button>

          <button className="btn-action">
            <ion-icon name="eye-outline"></ion-icon>
          </button>

          <button className="btn-action">
            <ion-icon name="repeat-outline"></ion-icon>
          </button>

          <button className="btn-action">
            <ion-icon name="bag-add-outline"></ion-icon>
          </button>
        </div>
      </div>

      <div className="showcase-content">
        <a href="#" className="showcase-category">
          {category}
        </a>

        <h3>
          <a href="#" className="showcase-title">
            {title}
          </a>
        </h3>

        <div className="showcase-rating">
          {Array.from({ length: rating }, (_, index) => (
            <ion-icon key={index} name="star"></ion-icon>
          ))}
          {Array.from({ length: 5 - rating }, (_, index) => (
            <ion-icon key={index} name="star-outline"></ion-icon>
          ))}
        </div>

        <div className="price-box">
          <p className="price">${price}</p>
          {oldPrice && <del>${oldPrice}</del>}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
