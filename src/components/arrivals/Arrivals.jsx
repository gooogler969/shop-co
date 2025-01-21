import React from "react";
import "./arrivals.css";
import Card from "../card/Card";

function Arrivals() {
  return (
    <div className="arrivals">
      <div className="container">
        <div className="arrivals-header">NEW ARRIVALS</div>
        <div className="arrivals-card">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Arrivals;
