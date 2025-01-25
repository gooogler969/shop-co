import React from "react";
import "./arrivals.css";
import Card from "../card/Card";
import CardSell from "../card/sellingCard";

function Arrivals() {
  return (
    <div className="arrivals">
      <div className="container arr">
        <div className="arrivals-header">NEW ARRIVALS</div>
        <div className="arrivals-card">
          <Card />
        </div>
        <a href="!#" className="arr-btn">
          View All
        </a>
      </div>
      <div className="container arr">
        <div className="arrivals-header">TOP SELLING</div>
        <div className="arrivals-card">
          <CardSell />
        </div>
        <a href="!#" className="arr-btn">
          View All
        </a>
      </div>
    </div>
  );
}

export default Arrivals;
