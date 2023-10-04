import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <div className="plants">
      <div className="plants-box">
        <h2>Featured Plants</h2>
        <select className="select">
          <option>Cheaper First</option>
        </select>
      </div>
      <div className="line"></div>
      <div className="plants-cards">
        <div className="plants-card">
          <img src="./components/images/cactus.svg" alt="" />
          <p>Kaktus Plants</p>
          <h6>IDR 85.000</h6>
        </div>
        <div className="plants-card">
          <img src="./components/images/cactus2.svg" alt="" />
          <p>Landak Plants</p>
          <h6>IDR 105.000</h6>
        </div>
        <div className="plants-card">
          <img src="./components/images/cactus3.svg" alt="" />
          <p>Kecubung Plants</p>
          <h6>IDR 85.000</h6>
        </div>
        <div className="plants-card">
          <img src="./components/images/cactus4.svg" alt="" />
          <p>Kecubung Plants</p>
          <h6>IDR 85.000</h6>
        </div>
        <div className="plants-card">
          <img src="./components/images/cactus5.svg" alt="" />
          <p>Kecubung Plants</p>
          <h6>IDR 85.000</h6>
        </div>
      </div>
    </div>
  );
}
