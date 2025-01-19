import React from "react";
import "./main.css";

import mainImg from "../../images/main-img.png";

function Main() {
  return (
    <main>
      <div className="container">
        <div className="main-section">
          <div className="main-content">
            <div className="title">FIND CLOTHES THAT MATCHES YOUR STYLE</div>
            <div className="description">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </div>
            <div className="main-btn">
              <a href="!#">Shop Now</a>
            </div>
            <div className="main-clients">
              <div className="main-title">
                200+
                <div className="main-suptitle">International Brands</div>
              </div>
              <div className="main-title">
                2,000+
                <div className="main-suptitle">High-Quality Products</div>
              </div>
              <div className="main-title">
                30,000+
                <div className="main-suptitle">Happy Customers</div>
              </div>
            </div>
          </div>
          <div className="main-img">
            <img src={mainImg} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
