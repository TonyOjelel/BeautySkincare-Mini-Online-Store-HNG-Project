import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      {/* Header Top */}
      <div className="header-top">
        <div className="container">
          <ul className="header-social-container">
            {/* Social Links */}
            <li>
              <Link href="#">
                <ion-icon
                  name="logo-facebook"
                  className="social-link"
                ></ion-icon>
              </Link>
            </li>
            <li>
              <Link href="#">
                <ion-icon
                  name="logo-twitter"
                  className="social-link"
                ></ion-icon>
              </Link>
            </li>
            <li>
              <Link href="#">
                <ion-icon
                  name="logo-instagram"
                  className="social-link"
                ></ion-icon>
              </Link>
            </li>
            <li>
              <Link href="#">
                <ion-icon
                  name="logo-linkedin"
                  className="social-link"
                ></ion-icon>
              </Link>
            </li>
          </ul>
          <div className="header-alert-news">
            <p>
              <b>Free Shipping</b> This Week Order Over - $55
            </p>
          </div>
          <div className="header-top-actions">
            <select name="currency">
              <option value="eur">EUR &euro;</option>
              <option value="usd">USD &dollar;</option>
            </select>
            <select name="language">
              <option value="en-US">English</option>
              <option value="es-ES">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>
      </div>
      {/* Header Main */}
      <div className="header-main">
        <div className="container">
          <Link href="#">
            <img
              src="./assets/images/logo/beauty-logo-12.jpg"
              alt="BeautySkincare's logo"
              width="120"
              height="36"
              className="header-logo"
            />
          </Link>
          <div className="header-search-container">
            <input
              type="search"
              name="search"
              className="search-field"
              placeholder="Enter your product name..."
            />
            <button className="search-btn">
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>
          <div className="header-user-actions">
            <button id="checkout-button">Checkout</button>
            <button className="action-btn">
              <ion-icon name="person-outline"></ion-icon>
            </button>
            <button className="action-btn">
              <ion-icon name="heart-outline"></ion-icon>
              <span className="count">0</span>
            </button>
            <button className="action-btn">
              <ion-icon name="bag-handle-outline"></ion-icon>
              <span className="count">0</span>
            </button>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <nav className="desktop-navigation-menu">
        <div className="container">
          <ul className="desktop-menu-category-list">
            <li class="menu-category">
              <a href="#" class="menu-title">
                Home
              </a>
            </li>

            <li class="menu-category">
              <a href="#" class="menu-title">
                Categories
              </a>

              <div class="dropdown-panel">
                <ul class="dropdown-panel-list">
                  <li class="menu-title">
                    <a href="#">Electronics</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Desktop</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Laptop</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Camera</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Tablet</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Headphone</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">
                      <img
                        src="./assets/images/electronics-banner-1.jpg"
                        alt="headphone collection"
                        width="250"
                        height="119"
                      />
                    </a>
                  </li>
                </ul>

                <ul class="dropdown-panel-list">
                  <li class="menu-title">
                    <a href="#">Men's</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Formal</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Casual</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Sports</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Jacket</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Sunglasses</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">
                      <img
                        src="./assets/images/mens-banner.jpg"
                        alt="men's fashion"
                        width="250"
                        height="119"
                      />
                    </a>
                  </li>
                </ul>

                <ul class="dropdown-panel-list">
                  <li class="menu-title">
                    <a href="#">Women's</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Formal</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Casual</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Perfume</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Cosmetics</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Bags</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">
                      <img
                        src="./assets/images/womens-banner.jpg"
                        alt="women's fashion"
                        width="250"
                        height="119"
                      />
                    </a>
                  </li>
                </ul>

                <ul class="dropdown-panel-list">
                  <li class="menu-title">
                    <a href="#">Electronics</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Smart Watch</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Smart TV</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Keyboard</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Mouse</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Microphone</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">
                      <img
                        src="./assets/images/electronics-banner-2.jpg"
                        alt="mouse collection"
                        width="250"
                        height="119"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Men's
              </a>

              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Shirt</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Shorts & Jeans</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Safety Shoes</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Wallet</a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Women's
              </a>

              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Dress & Frock</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Earrings</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Necklace</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Makeup Kit</a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Jewelry
              </a>

              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Earrings</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Couple Rings</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Necklace</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Bracelets</a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Perfume
              </a>

              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Clothes Perfume</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Deodorant</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Flower Fragrance</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Air Freshener</a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Blog
              </a>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Hot Offers
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
