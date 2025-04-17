import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Hero from "./Hero/Hero";
import Gallery from "./Gallery/Gallery";
import Footer from "./Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="main">
      <Hero />
      <Gallery />
      <Footer />
    </div>
  </React.StrictMode>
);

