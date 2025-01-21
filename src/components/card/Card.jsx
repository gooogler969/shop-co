import React from "react";
import "./card.css";

import Cards from "../../data/arrials-data.json";

function Card() {
  return (
    <div className="card">
      <div className="card-container">
        {Cards.map((card) => {
          return (
            <div className="card-wrapper">
              <div className="card-image">
                <img src={card.img} alt="" />
              </div>
              <div className="card-content">
                <h3>{card.title}</h3>
                <div className="raiting">
                  <img src={card.raiting} alt="" />
                  <p>{card.raiting}</p>
                </div>
                <div className="price">
                  <p>{card.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
