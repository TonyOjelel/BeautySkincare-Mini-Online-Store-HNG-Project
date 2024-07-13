import React from "react";

const CategoryItem = ({ icon, title, amount }) => {
  return (
    <div className="category-item">
      <div className="category-img-box">
        <img src={icon} alt={title} width="30" />
      </div>

      <div className="category-content-box">
        <div className="category-content-flex">
          <h3 className="category-item-title">{title}</h3>

          <p className="category-item-amount">({amount})</p>
        </div>

        <a href="#" className="category-btn">
          Show all
        </a>
      </div>
    </div>
  );
};

export default CategoryItem;
