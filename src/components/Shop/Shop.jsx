import React from "react";
import "./Shop.css";

export default function Shop() {
  return (
    <div className="shop">
      <div className="shop-card">
        <h1 className="shop-text">
          Get your favourites plant on <br />
          our shop now
        </h1>
        <img src="./components/images/shop-image.svg" alt="" />
        <button>Visit Shop</button>
      </div>
    </div>
  );
}
