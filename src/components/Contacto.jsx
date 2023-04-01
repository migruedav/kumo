import React from "react";
import "./Contacto.css";
import map from '../images/mapa.jpg'

const Contacto = () => {
  return (
    <div className="contacto">
      <div className="contacto-container">
        <h1 className="contacto-title">CONTACTO</h1>
        <h1 className="contacto-subtitle">KUMO KARATE DO</h1>
        <p className="contacto-centro">CENTRO CULTURAL PEDREGAL</p>
        <p className="contacto-address">
          Av. de las fuentes #557, Jardines del Pedregal <br /> C.P. 01900,
          Álvaro Obregón.
        </p>
      </div>
      <div className="contacto-map">
            <img className="map" src={map} alt="" />
      </div>
    </div>
  );
};

export default Contacto;
