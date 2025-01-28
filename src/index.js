import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/navigation/Navbar";
import Main from "./components/main/Main";
import Logos from "./components/logos/Logos";
import Products from "./components/products/Products";
import Footer from "./components/footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Navbar />
      <Main />
      <Logos />
      <Products />
      <Footer />
    </div>
  </React.StrictMode>
);
