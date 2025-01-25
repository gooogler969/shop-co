import React from "react";
import "./products.css";
import Card from "../card/Card";
import CardSell from "../card/sellingCard";

function Products() {
  return (
    <div className="products">
      <div className="container arr">
        <div className="products-header">NEW ARRIVALS</div>
        <div className="products-card">
          <Card />
        </div>
        <a href="!#" className="products-btn">
          View All
        </a>
      </div>
      <div className="container arr">
        <div className="products-header">TOP SELLING</div>
        <div className="products-card">
          <CardSell />
        </div>
        <a href="!#" className="products-btn">
          View All
        </a>
      </div>
    </div>
  );
}

export default Products;
