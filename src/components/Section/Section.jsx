import React from "react";
import "./Section.css";

export default function Section() {
  return (
    <div className="section">
      <div className="section-card">
        <h1>
          Buy more plants, it <br /> helps you to be relaxed
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi <br />
          gravida gravida aliquam. Pellentesque et lobortis nisl. Sed et <br />
          mauris justo. Nulla eu enim non mauris maximus dignissim. <br />
          Maecenas vitae eros sapien. Quisque pellentesque tempus <br />
          dignissim.
        </p>
        <img
          className="background-img"
          src="./components/images/bgc-img.svg"
          alt=""
        />
        <img
          className="bgc-img"
          src="./components/images/background-image.svg"
          alt=""
        />
      </div>
    </div>
  );
}
