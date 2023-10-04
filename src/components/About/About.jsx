import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="cards">
        <div className="card">
          <img src="./components/images/car.svg" alt="" />
          <h6>
            Fast <br /> Delivery
          </h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </p>
        </div>
        <div className="card">
          <img src="./components/images/headphones.svg" alt="" />
          <h6>
            Great Customer Service
          </h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </p>
        </div>
        <div className="card">
          <img src="./components/images/plant.svg" alt="" />
          <h6>
            Original <br /> Plants
          </h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </p>
        </div>
        <div className="card">
          <img src="./components/images/dollar.svg" alt="" />
          <h6>
            Affordable <br /> Price
          </h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </p>
        </div>
      </div>
    </div>
  );
}
