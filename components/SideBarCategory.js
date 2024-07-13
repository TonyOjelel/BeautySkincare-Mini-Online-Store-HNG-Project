import React from "react";

const SidebarCategory = ({ icon, title, items }) => {
  return (
    <li className="sidebar-menu-category">
      <button className="sidebar-accordion-menu" data-accordion-btn>
        <div className="menu-title-flex">
          <img
            src={icon}
            alt={title}
            className="menu-title-img"
            width="20"
            height="20"
          />
          <p className="menu-title">{title}</p>
        </div>
        <div>
          <ion-icon name="add-outline" className="add-icon"></ion-icon>
          <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
        </div>
      </button>
      <ul className="sidebar-submenu-category-list" data-accordion>
        {items.map((item, index) => (
          <li className="sidebar-submenu-category" key={index}>
            <a href="#" className="sidebar-submenu-title">
              <p className="product-name">{item.name}</p>
              <data
                value={item.stock}
                className="stock"
                title="Available Stock"
              >
                {item.stock}
              </data>
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default SidebarCategory;
