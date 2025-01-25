import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/navigation/Navbar";
import Main from "./components/main/Main";
import Logos from "./components/logos/Logos";
import Products from "./components/products/Products";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Navbar />
      <Main />
      <Logos />

      <Products />
    </div>
  </React.StrictMode>
);
