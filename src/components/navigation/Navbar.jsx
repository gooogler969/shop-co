import React from "react";
import "./navbar.css";

import searchIcon from "../../images/search.svg";
import navCart from "../../images/cart.svg";
import navUser from "../../images/user.svg";

function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="nav-items">
          <div className="nav-logo">SHOP.CO </div>
          <div className="nav-links">
            <ul>
              <li>
                <a href="!#">Shop</a>
              </li>
              <li>
                <a href="!#">On Sale</a>
              </li>
              <li>
                <a href="!#">New Arrials</a>
              </li>
              <li>
                <a href="!#">Brands</a>
              </li>
            </ul>
          </div>
          <div className="search">
            <a href="!#">
              <img src={searchIcon} alt="" />
            </a>
            <input
              type="text"
              placeholder="Search for products..."
              className="search-input"
            />
          </div>
          <div className="user">
            <img src={navCart} alt="cart" />
            <img src={navUser} alt="user" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
