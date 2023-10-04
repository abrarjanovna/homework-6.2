import React, { useState } from "react";

import { createRoot } from "react-dom/client";

import Header from "./components/Header/Header";
import "./style.css";
import About from "./components/About/About";
import Main from "./components/Main/Main";
import Section from "./components/Section/Section";
import Shop from "./components/Shop/Shop";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Main />
      <Section />
      <Shop />
      <Footer />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
