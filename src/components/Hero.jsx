import React from "react";
import "./Hero.css";
import Hanko from "../images/hanko-obs.png";

const Hero = () => {
  const ChatClick = () => {
    const url = `https://api.whatsapp.com/send?phone=5524499197`;
    window.open(url, "_blank");
  };
  return (
    <div className="hero-container">
      <div className="hero-section">
        <img src={Hanko} alt="" />
        <h1>KUMO KARATE DO</h1>
        <h3>
          Academia de Karate Do Shito Ryu <br />
          en la Ciudad de México
        </h3>
        <button onClick={ChatClick}>Quiero informes</button>
      </div>
    </div>
  );
};

export default Hero;
