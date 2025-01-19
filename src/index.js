import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/navigation/Navbar";
import Main from "./components/main/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Navbar />
      <Main />
    </div>
  </React.StrictMode>
);
