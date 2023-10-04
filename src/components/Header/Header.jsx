import React from "react";

export default function Header() {
  return (
    <div className="header">
      {/* Header   */}
      <div className="container">
        <img className="icon" src="./components/images/icon.svg" alt="#" />
        <div className="box">
          <img src="./components/images/search.svg" alt="" />
          <img src="./components/images/shopping-cart.svg" alt="" />
          <div className="btn">
            <button className="first-btn">Sign Up</button>
            <button className="second-btn">Sign In</button>
          </div>
        </div>
      </div>
      <div className="text">
        <h1>
          Kembang <br /> Flower Mantap
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing <br /> and
          typesetting industry. Lorem Ipsum has been the <br /> industry's
          standard dummy text ever since the 1500s.
        </p>
      </div>
      <div className="main">
        <div className="previous">
          <h6>
            <span>←</span> Previous
          </h6>
          <p>Kaktus Plant</p>
        </div>
        <div className="next">
          <h6>
            Next <span>→</span>
          </h6>
          <p>Rahasia Plant</p>
        </div>
      </div>
    </div>
  );
}
