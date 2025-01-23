import React from "react";
import "./card.css";

import Cards from "../../data/arrials-data.json";

function Card() {
  return (
    <div className="card">
      <div className="container card-container">
        {Cards.map((card) => (
          <div key={card.id} className="card-wrapper">
            <div className="card-image">
              <img src={card.img} alt={card.title} />
            </div>
            <div className="card-content">
              <h3>{card.title}</h3>
              <div className="raiting">
                <p>{card.raiting}</p>
              </div>
              <div className="price">
                <p>{card.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
