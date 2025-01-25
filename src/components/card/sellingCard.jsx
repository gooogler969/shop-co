import React from "react";
import "./card.css";

import sellingCards from "../../data/topselling-data.json";

function sellingCard() {
  return (
    <div className="card">
      <div className="container card-container">
        {sellingCards.map((sellingCard) => (
          <div key={sellingCard.id} className="card-wrapper">
            <div className="card-image">
              <img src={sellingCard.img} alt={sellingCard.title} />
            </div>
            <div className="card-content">
              <h3>{sellingCard.title}</h3>
              <div className="raiting">
                <img src={sellingCard.star} alt="" />
                <p>{sellingCard.raiting}</p>
              </div>
              <div className="price">
                <p>{sellingCard.price}$</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default sellingCard;
