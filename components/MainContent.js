import React from "react";
import Banner from "./Banner";
import CategoryItem from "./CategoryItem";
import SidebarCategory from "./SideBarCategory";
import ProductGrid from "./ProductGrid";
import { sidebarCategories } from "../data/data.js";
import ProductShowcase from "./ProductShowCase";

const MainContent = () => {
  return (
    <main>
      <div className="banner">
        <div className="container">
          <div className="slider-container has-scrollbar">
            <Banner
              image="./assets/images/banner-1.jpg"
              subtitle="Trending item"
              title="Women's latest fashion sale"
              price="20"
            />
            <Banner
              image="./assets/images/banner-2.jpg"
              subtitle="Trending accessories"
              title="Modern sunglasses"
              price="15"
            />
            <Banner
              image="./assets/images/banner-3.jpg"
              subtitle="Sale Offer"
              title="New fashion summer sale"
              price="29.99"
            />
          </div>
        </div>
      </div>
      <div className="category">
        <div className="container">
          <div className="category-item-container has-scrollbar">
            <CategoryItem
              icon="./assets/images/icons/dress.svg"
              title="Dress & frock"
              amount={53}
            />
            <CategoryItem
              icon="./assets/images/icons/coat.svg"
              title="Winter wear"
              amount={58}
            />
            <CategoryItem
              icon="./assets/images/icons/glasses.svg"
              title="Glasses & lens"
              amount={68}
            />
            <CategoryItem
              icon="./assets/images/icons/shorts.svg"
              title="Shorts & jeans"
              amount={84}
            />
            <CategoryItem
              icon="./assets/images/icons/tee.svg"
              title="T-shirts"
              amount={35}
            />
            <CategoryItem
              icon="./assets/images/icons/jacket.svg"
              title="Jacket"
              amount={16}
            />
            <CategoryItem
              icon="./assets/images/icons/watch.svg"
              title="Watch"
              amount={27}
            />
            <CategoryItem
              icon="./assets/images/icons/hat.svg"
              title="Hat & caps"
              amount={39}
            />
          </div>
        </div>
      </div>
      <div className="product-container">
        <div className="container">
          <div className="sidebar has-scrollbar" data-mobile-menu>
            <div className="sidebar-category">
              <div className="sidebar-top">
                <h2 className="sidebar-title">Category</h2>

                <button
                  className="sidebar-close-btn"
                  data-mobile-menu-close-btn
                >
                  <ion-icon name="close-outline"></ion-icon>
                </button>
              </div>

              <ul className="sidebar-menu-category-list">
                {sidebarCategories?.map((category, index) => (
                  <SidebarCategory
                    key={index}
                    icon={category.icon}
                    title={category.title}
                    items={category.items}
                  />
                ))}
              </ul>
            </div>

            <div className="product-showcase">
              <h3 className="showcase-heading">best sellers</h3>

              <div className="showcase-wrapper">
                <div className="showcase-container">
                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <img
                        src="./assets/images/products/1.jpg"
                        alt="baby fabric shoes"
                        width="75"
                        height="75"
                        className="showcase-img"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">baby fabric shoes</h4>
                      </a>

                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>

                      <div className="price-box">
                        <del>$5.00</del>
                        <p className="price">$4.00</p>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <img
                        src="./assets/images/products/2.jpg"
                        alt="men's hoodies t-shirt"
                        className="showcase-img"
                        width="75"
                        height="75"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">
                          men's hoodies t-shirt
                        </h4>
                      </a>
                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half-outline"></ion-icon>
                      </div>

                      <div className="price-box">
                        <del>$17.00</del>
                        <p className="price">$7.00</p>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <img
                        src="./assets/images/products/3.jpg"
                        alt="girls t-shirt"
                        className="showcase-img"
                        width="75"
                        height="75"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">girls t-shirt</h4>
                      </a>
                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half-outline"></ion-icon>
                      </div>

                      <div className="price-box">
                        <del>$5.00</del>
                        <p className="price">$3.00</p>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <img
                        src="./assets/images/products/4.jpg"
                        alt="woolen hat for men"
                        className="showcase-img"
                        width="75"
                        height="75"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">woolen hat for men</h4>
                      </a>
                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>

                      <div className="price-box">
                        <del>$15.00</del>
                        <p className="price">$12.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product-box">
            <div className="product-minimal">
              <div className="product-showcase">
                <h2 className="title">New Arrivals</h2>

                <div className="showcase-wrapper has-scrollbar">
                  <div className="showcase-container">
                    <div className="showcase">
                      <a href="#" className="showcase-img-box">
                        <img
                          src="./assets/images/products/clothes-1.jpg"
                          alt="relaxed short full sleeve t-shirt"
                          width="70"
                          className="showcase-img"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="#">
                          <h4 className="showcase-title">
                            Relaxed Short full Sleeve T-Shirt
                          </h4>
                        </a>

                        <a href="#" className="showcase-category">
                          Clothes
                        </a>

                        <div className="price-box">
                          <p className="price">$45.00</p>
                          <del>$12.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="#" className="showcase-img-box">
                        <img
                          src="./assets/images/products/clothes-2.jpg"
                          alt="girls pink embro design top"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="#">
                          <h4 className="showcase-title">
                            Girls pnk Embro design Top
                          </h4>
                        </a>

                        <a href="#" className="showcase-category">
                          Clothes
                        </a>

                        <div className="price-box">
                          <p className="price">$61.00</p>
                          <del>$9.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="#" className="showcase-img-box">
                        <img
                          src="./assets/images/products/clothes-3.jpg"
                          alt="black floral wrap midi skirt"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="#">
                          <h4 className="showcase-title">
                            Black Floral Wrap Midi Skirt
                          </h4>
                        </a>

                        <a href="#" className="showcase-category">
                          Clothes
                        </a>

                        <div className="price-box">
                          <p className="price">$76.00</p>
                          <del>$25.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="#" className="showcase-img-box">
                        <img
                          src="./assets/images/products/shirt-1.jpg"
                          alt="pure garment dyed cotton shirt"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="#">
                          <h4 className="showcase-title">
                            Pure Garment Dyed Cotton Shirt
                          </h4>
                        </a>

                        <a href="#" className="showcase-category">
                          Mens Fashion
                        </a>

                        <div className="price-box">
                          <p className="price">$68.00</p>
                          <del>$31.00</del>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="showcase-container">
                    <div className="showcase">
                      <a href="#" className="showcase-img-box">
                        <img
                          src="./assets/images/products/jacket-5.jpg"
                          alt="men yarn fleece full-zip jacket"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="#">
                          <h4 className="showcase-title">
                            MEN Yarn Fleece Full-Zip Jacket
                          </h4>
                        </a>

                        <a href="#" className="showcase-category">
                          Winter wear
                        </a>

                        <div className="price-box">
                          <p className="price">$61.00</p>
                          <del>$11.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="#" className="showcase-img-box">
                        <img
                          src="./assets/images/products/jacket-1.jpg"
                          alt="mens winter leathers jackets"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="#">
                          <h4 className="showcase-title">
                            Mens Winter Leathers Jackets
                          </h4>
                        </a>

                        <a href="#" className="showcase-category">
                          Winter wear
                        </a>

                        <div className="price-box">
                          <p className="price">$32.00</p>
                          <del>$20.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="#" className="showcase-img-box">
                        <img
                          src="./assets/images/products/jacket-3.jpg"
                          alt="mens winter leathers jackets"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="#">
                          <h4 className="showcase-title">
                            Mens Winter Leathers Jackets
                          </h4>
                        </a>

                        <a href="#" className="showcase-category">
                          Jackets
                        </a>

                        <div className="price-box">
                          <p className="price">$50.00</p>
                          <del>$25.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="#" className="showcase-img-box">
                        <img
                          src="./assets/images/products/shorts-1.jpg"
                          alt="better basics french terry sweatshorts"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="#">
                          <h4 className="showcase-title">
                            Better Basics French Terry Sweatshorts
                          </h4>
                        </a>

                        <a href="#" className="showcase-category">
                          Shorts
                        </a>

                        <div className="price-box">
                          <p className="price">$20.00</p>
                          <del>$10.00</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-showcase">
                <h2 className="title">Trending</h2>

                <div className="showcase-wrapper has-scrollbar">
                  <div className="showcase-container">
                    <div className="showcase">
                      <a href="#" className="showcase-img-box">
                        <img
                          src="./assets/images/products/sports-1.jpg"
                          alt="running & trekking shoes - white"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="#">
                          <h4 className="showcase-title">
                            Running & Trekking Shoes - White
                          </h4>
                        </a>

                        <a href="#" className="showcase-category">
                          Sports
                        </a>

                        <div className="price-box">
                          <p className="price">$49.00</p>
                          <del>$15.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="#" className="showcase-img-box">
                        <img
                          src="./assets/images/products/sports-2.jpg"
                          alt="trekking & running shoes - black"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="#">
                          <h4 className="showcase-title">
                            Trekking & Running Shoes - black
                          </h4>
                        </a>

                        <a href="#" className="showcase-category">
                          Sports
                        </a>

                        <div className="price-box">
                          <p className="price">$78.00</p>
                          <del>$36.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="#" className="showcase-img-box">
                        <img
                          src="./assets/images/products/party-wear-1.jpg"
                          alt="womens party wear shoes"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="#">
                          <h4 className="showcase-title">
                            Womens Party Wear Shoes
                          </h4>
                        </a>

                        <a href="#" className="showcase-category">
                          Party wear
                        </a>

                        <div className="price-box">
                          <p className="price">$94.00</p>
                          <del>$42.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="#" className="showcase-img-box">
                        <img
                          src="./assets/images/products/sports-3.jpg"
                          alt="sports claw women's shoes"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="#">
                          <h4 className="showcase-title">
                            Sports Claw Women's Shoes
                          </h4>
                        </a>

                        <a href="#" className="showcase-category">
                          Sports
                        </a>

                        <div className="price-box">
                          <p className="price">$54.00</p>
                          <del>$65.00</del>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="showcase-container">
                    <div className="showcase">
                      <a href="#" className="showcase-img-box">
                        <img
                          src="./assets/images/products/sports-6.jpg"
                          alt="air tekking shoes - white"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="#">
                          <h4 className="showcase-title">
                            Air Trekking Shoes - white
                          </h4>
                        </a>

                        <a href="#" className="showcase-category">
                          Sports
                        </a>

                        <div className="price-box">
                          <p className="price">$52.00</p>
                          <del>$55.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="#" className="showcase-img-box">
                        <img
                          src="./assets/images/products/shoe-3.jpg"
                          alt="Boot With Suede Detail"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="#">
                          <h4 className="showcase-title">
                            Boot With Suede Detail
                          </h4>
                        </a>

                        <a href="#" className="showcase-category">
                          boots
                        </a>

                        <div className="price-box">
                          <p className="price">$20.00</p>
                          <del>$30.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="#" className="showcase-img-box">
                        <img
                          src="./assets/images/products/shoe-1.jpg"
                          alt="men's leather formal wear shoes"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="#">
                          <h4 className="showcase-title">
                            Men's Leather Formal Wear shoes
                          </h4>
                        </a>

                        <a href="#" className="showcase-category">
                          formal
                        </a>

                        <div className="price-box">
                          <p className="price">$56.00</p>
                          <del>$78.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="#" className="showcase-img-box">
                        <img
                          src="./assets/images/products/shoe-2.jpg"
                          alt="casual men's brown shoes"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="#">
                          <h4 className="showcase-title">
                            Casual Men's Brown shoes
                          </h4>
                        </a>

                        <a href="#" className="showcase-category">
                          Casual
                        </a>

                        <div className="price-box">
                          <p className="price">$50.00</p>
                          <del>$55.00</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-showcase">
                <h2 className="title">Top Rated</h2>

                <div className="showcase-wrapper has-scrollbar">
                  <div className="showcase-container">
                    <div className="showcase">
                      <a href="#" className="showcase-img-box">
                        <img
                          src="./assets/images/products/watch-3.jpg"
                          alt="pocket watch leather pouch"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="#">
                          <h4 className="showcase-title">
                            Pocket Watch Leather Pouch
                          </h4>
                        </a>

                        <a href="#" className="showcase-category">
                          Watches
                        </a>

                        <div className="price-box">
                          <p className="price">$50.00</p>
                          <del>$34.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="#" className="showcase-img-box">
                        <img
                          src="./assets/images/products/jewellery-3.jpg"
                          alt="silver deer heart necklace"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="#">
                          <h4 className="showcase-title">
                            Silver Deer Heart Necklace
                          </h4>
                        </a>

                        <a href="#" className="showcase-category">
                          Jewellery
                        </a>

                        <div className="price-box">
                          <p className="price">$84.00</p>
                          <del>$30.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="#" className="showcase-img-box">
                        <img
                          src="./assets/images/products/perfume.jpg"
                          alt="titan 100 ml womens perfume"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="#">
                          <h4 className="showcase-title">
                            Titan 100 Ml Womens Perfume
                          </h4>
                        </a>

                        <a href="#" className="showcase-category">
                          Perfume
                        </a>

                        <div className="price-box">
                          <p className="price">$42.00</p>
                          <del>$10.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="#" className="showcase-img-box">
                        <img
                          src="./assets/images/products/belt.jpg"
                          alt="men's leather reversible belt"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="#">
                          <h4 className="showcase-title">
                            Men's Leather Reversible Belt
                          </h4>
                        </a>

                        <a href="#" className="showcase-category">
                          Belt
                        </a>

                        <div className="price-box">
                          <p className="price">$24.00</p>
                          <del>$10.00</del>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="showcase-container">
                    <div className="showcase">
                      <a href="#" className="showcase-img-box">
                        <img
                          src="./assets/images/products/jewellery-2.jpg"
                          alt="platinum zircon classNameic ring"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="#">
                          <h4 className="showcase-title">
                            platinum Zircon classNameic Ring
                          </h4>
                        </a>

                        <a href="#" className="showcase-category">
                          jewellery
                        </a>

                        <div className="price-box">
                          <p className="price">$62.00</p>
                          <del>$65.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="#" className="showcase-img-box">
                        <img
                          src="./assets/images/products/watch-1.jpg"
                          alt="smart watche vital plus"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="#">
                          <h4 className="showcase-title">
                            Smart watche Vital Plus
                          </h4>
                        </a>

                        <a href="#" className="showcase-category">
                          Watches
                        </a>

                        <div className="price-box">
                          <p className="price">$56.00</p>
                          <del>$78.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="#" className="showcase-img-box">
                        <img
                          src="./assets/images/products/shampoo.jpg"
                          alt="shampoo conditioner packs"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="#">
                          <h4 className="showcase-title">
                            shampoo conditioner packs
                          </h4>
                        </a>

                        <a href="#" className="showcase-category">
                          cosmetics
                        </a>

                        <div className="price-box">
                          <p className="price">$20.00</p>
                          <del>$30.00</del>
                        </div>
                      </div>
                    </div>

                    <div className="showcase">
                      <a href="#" className="showcase-img-box">
                        <img
                          src="./assets/images/products/jewellery-1.jpg"
                          alt="rose gold peacock earrings"
                          className="showcase-img"
                          width="70"
                        />
                      </a>

                      <div className="showcase-content">
                        <a href="#">
                          <h4 className="showcase-title">
                            Rose Gold Peacock Earrings
                          </h4>
                        </a>

                        <a href="#" className="showcase-category">
                          jewellery
                        </a>

                        <div className="price-box">
                          <p className="price">$20.00</p>
                          <del>$30.00</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-featured">
              <h2 className="title">Deal of the day</h2>

              <div className="showcase-wrapper has-scrollbar">
                <div className="showcase-container">
                  <div className="showcase">
                    <div className="showcase-banner">
                      <img
                        src="./assets/images/products/shampoo.jpg"
                        alt="shampoo, conditioner & facewash packs"
                        className="showcase-img"
                      />
                    </div>

                    <div className="showcase-content">
                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>

                      <a href="#">
                        <h3 className="showcase-title">
                          shampoo, conditioner & facewash packs
                        </h3>
                      </a>

                      <p className="showcase-desc">
                        Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor
                        dolor sit amet consectetur Lorem ipsum dolor
                      </p>

                      <div className="price-box">
                        <p className="price">$150.00</p>

                        <del>$200.00</del>
                      </div>

                      <button className="add-cart-btn">add to cart</button>

                      <div className="showcase-status">
                        <div className="wrapper">
                          <p>
                            already sold: <b>20</b>
                          </p>

                          <p>
                            available: <b>40</b>
                          </p>
                        </div>

                        <div className="showcase-status-bar"></div>
                      </div>

                      <div className="countdown-box">
                        <p className="countdown-desc">
                          Hurry Up! Offer ends in:
                        </p>

                        <div className="countdown">
                          <div className="countdown-content">
                            <p className="display-number">360</p>

                            <p className="display-text">Days</p>
                          </div>

                          <div className="countdown-content">
                            <p className="display-number">24</p>
                            <p className="display-text">Hours</p>
                          </div>

                          <div className="countdown-content">
                            <p className="display-number">59</p>
                            <p className="display-text">Min</p>
                          </div>

                          <div className="countdown-content">
                            <p className="display-number">00</p>
                            <p className="display-text">Sec</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="showcase-container">
                  <div className="showcase">
                    <div className="showcase-banner">
                      <img
                        src="./assets/images/products/jewellery-1.jpg"
                        alt="Rose Gold diamonds Earring"
                        className="showcase-img"
                      />
                    </div>

                    <div className="showcase-content">
                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>

                      <h3 className="showcase-title">
                        <a href="#" className="showcase-title">
                          Rose Gold diamonds Earring
                        </a>
                      </h3>

                      <p className="showcase-desc">
                        Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor
                        dolor sit amet consectetur Lorem ipsum dolor
                      </p>

                      <div className="price-box">
                        <p className="price">$1990.00</p>
                        <del>$2000.00</del>
                      </div>

                      <button className="add-cart-btn">add to cart</button>

                      <div className="showcase-status">
                        <div className="wrapper">
                          <p>
                            already sold: <b>15</b>
                          </p>

                          <p>
                            available: <b>40</b>
                          </p>
                        </div>

                        <div className="showcase-status-bar"></div>
                      </div>

                      <div className="countdown-box">
                        <p className="countdown-desc">
                          Hurry Up! Offer ends in:
                        </p>

                        <div className="countdown">
                          <div className="countdown-content">
                            <p className="display-number">360</p>
                            <p className="display-text">Days</p>
                          </div>

                          <div className="countdown-content">
                            <p className="display-number">24</p>
                            <p className="display-text">Hours</p>
                          </div>

                          <div className="countdown-content">
                            <p className="display-number">59</p>
                            <p className="display-text">Min</p>
                          </div>

                          <div className="countdown-content">
                            <p className="display-number">00</p>
                            <p className="display-text">Sec</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-main">
              <h2 className="title">New Products</h2>

              <ProductGrid />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <div className="testimonials-box">
            <div className="testimonial">
              <h2 className="title">testimonial</h2>

              <div className="testimonial-card">
                <img
                  src="./assets/images/testimonial-1.jpg"
                  alt="alan doe"
                  className="testimonial-banner"
                  width="80"
                  height="80"
                />

                <p className="testimonial-name">Alan Doe</p>

                <p className="testimonial-title">CEO & Founder Invision</p>

                <img
                  src="./assets/images/icons/quotes.svg"
                  alt="quotation"
                  className="quotation-img"
                  width="26"
                />

                <p className="testimonial-desc">
                  Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor
                  sit amet.
                </p>
              </div>
            </div>

            <div className="cta-container">
              <img
                src="./assets/images/cta-banner.jpg"
                alt="summer collection"
                className="cta-banner"
              />

              <a href="#" className="cta-content">
                <p className="discount">25% Discount</p>

                <h2 className="cta-title">Summer collection</h2>

                <p className="cta-text">Starting @ $10</p>

                <button className="cta-btn">Shop now</button>
              </a>
            </div>

            <div className="service">
              <h2 className="title">Our Services</h2>

              <div className="service-container">
                <a href="#" className="service-item">
                  <div className="service-icon">
                    <ion-icon name="boat-outline"></ion-icon>
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">Worldwide Delivery</h3>
                    <p className="service-desc">For Order Over $100</p>
                  </div>
                </a>

                <a href="#" className="service-item">
                  <div className="service-icon">
                    <ion-icon name="rocket-outline"></ion-icon>
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">Next Day delivery</h3>
                    <p className="service-desc">UK Orders Only</p>
                  </div>
                </a>

                <a href="#" className="service-item">
                  <div className="service-icon">
                    <ion-icon name="call-outline"></ion-icon>
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">Best Online Support</h3>
                    <p className="service-desc">Hours: 8AM - 11PM</p>
                  </div>
                </a>

                <a href="#" className="service-item">
                  <div className="service-icon">
                    <ion-icon name="arrow-undo-outline"></ion-icon>
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">Return Policy</h3>
                    <p className="service-desc">Easy & Free Return</p>
                  </div>
                </a>

                <a href="#" className="service-item">
                  <div className="service-icon">
                    <ion-icon name="ticket-outline"></ion-icon>
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">30% money back</h3>
                    <p className="service-desc">For Order Over $100</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog">
        <div className="container">
          <div className="blog-container has-scrollbar">
            <div className="blog-card">
              <a href="#">
                <img
                  src="./assets/images/blog-1.jpg"
                  alt="Clothes Retail KPIs 2021 Guide for Clothes Executives"
                  width="300"
                  className="blog-banner"
                />
              </a>

              <div className="blog-content">
                <a href="#" className="blog-category">
                  Fashion
                </a>

                <a href="#">
                  <h3 className="blog-title">
                    Clothes Retail KPIs 2021 Guide for Clothes Executives.
                  </h3>
                </a>

                <p className="blog-meta">
                  By <cite>Mr Admin</cite> /
                  <time dateTime="2024-04-06">Apr 06, 2024</time>
                </p>
              </div>
            </div>

            <div className="blog-card">
              <a href="#">
                <img
                  src="./assets/images/blog-2.jpg"
                  alt="Curbside fashion Trends: How to Win the Pickup Battle."
                  className="blog-banner"
                  width="300"
                />
              </a>

              <div className="blog-content">
                <a href="#" className="blog-category">
                  Clothes
                </a>

                <h3>
                  <a href="#" className="blog-title">
                    Curbside fashion Trends: How to Win the Pickup Battle.
                  </a>
                </h3>

                <p className="blog-meta">
                  By <cite>Mr Robin</cite> /
                  <time dateTime="2024-01-18">Jan 18, 2024</time>
                </p>
              </div>
            </div>

            <div className="blog-card">
              <a href="#">
                <img
                  src="./assets/images/blog-3.jpg"
                  alt="EBT vendors: Claim Your Share of SNAP Online Revenue."
                  className="blog-banner"
                  width="300"
                />
              </a>

              <div className="blog-content">
                <a href="#" className="blog-category">
                  Shoes
                </a>

                <h3>
                  <a href="#" className="blog-title">
                    EBT vendors: Claim Your Share of SNAP Online Revenue.
                  </a>
                </h3>

                <p className="blog-meta">
                  By <cite>Mr Selsa</cite> /
                  <time dateTime="2024-02-10">Feb 10, 2024</time>
                </p>
              </div>
            </div>

            <div className="blog-card">
              <a href="#">
                <img
                  src="./assets/images/blog-4.jpg"
                  alt="Curbside fashion Trends: How to Win the Pickup Battle."
                  className="blog-banner"
                  width="300"
                />
              </a>

              <div className="blog-content">
                <a href="#" className="blog-category">
                  Electronics
                </a>

                <h3>
                  <a href="#" className="blog-title">
                    Curbside fashion Trends: How to Win the Pickup Battle.
                  </a>
                </h3>

                <p className="blog-meta">
                  By <cite>Mr Pawar</cite> /
                  <time dateTime="2024-03-15">Mar 15, 2024</time>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
