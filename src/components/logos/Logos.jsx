import React from "react";
import "./logos.css";
import Versace from "../../images/versace.svg";
import Zara from "../../images/zara.svg";
import Gucci from "../../images/gucci.svg";
import Prada from "../../images/prada.svg";
import Ck from "../../images/calvinklain.svg";

function Logos() {
  return (
    <div className="logo-row">
      <div className="container">
        <div className="logo-container">
          <img src={Versace} alt="Versace" />
          <img src={Zara} alt="Zara" />
          <img src={Gucci} alt="Gucci" />
          <img src={Prada} alt="Prada" />
          <img src={Ck} alt="Calvin Klien" />
        </div>
      </div>
    </div>
  );
}

export default Logos;
