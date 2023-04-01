import React from "react";
import "./QuienesSomos.css";
import Alex from "../images/alex.png";

const QuienesSomos = () => {
  return (
    <div className="qs-container">
      <div className="qs-section">
        <h1>QUIENES SOMOS</h1>
        <p>
          Somos una academia de Karate Do Shito Ryu ubicada en el sur de la
          CDMX, afiliados a la Federación Mexicana de Karate (FEMEKA). Nuestro
          objetivo principal es trabajar en el bienestar espiritual, mental y
          físico-atlético del alumno a través de la práctica del Karate Do,
          mediante técnicas de defensa y ataque y valores como el respeto, la
          perseverancia, la superación personal y el logro de objetivos a través
          del esfuerzo continuo.
        </p>
      </div>
      <div className="qs-image">
        <img src={Alex} alt="" />
      </div>
    </div>
  );
};

export default QuienesSomos;
