import React from "react";
import { products } from "../data/products.js";

const ProductGrid = () => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="showcase">
          <div className="showcase-banner">
            <img
              src={product.images.default}
              alt={product.title}
              width="300"
              className="product-img default"
            />
            <img
              src={product.images.hover}
              alt={product.title}
              width="300"
              className="product-img hover"
            />

            {product.badge && <p className="showcase-badge">{product.badge}</p>}

            <div className="showcase-actions">
              {product.actions.map((action, index) => (
                <button key={index} className="btn-action">
                  <ion-icon name={action}></ion-icon>
                </button>
              ))}
            </div>
          </div>

          <div className="showcase-content">
            <a href="#" className="showcase-category">
              {product.category}
            </a>

            <a href="#">
              <h3 className="showcase-title">{product.title}</h3>
            </a>

            <div className="showcase-rating">
              {Array.from({ length: 5 }, (_, index) => (
                <ion-icon
                  key={index}
                  name={index < product.rating ? "star" : "star-outline"}
                ></ion-icon>
              ))}
            </div>

            <div className="price-box">
              <p className="price">${product.price}.00</p>
              <del>${product.originalPrice}.00</del>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
