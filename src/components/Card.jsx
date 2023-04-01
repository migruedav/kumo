import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img className="card-image" src={props.image} />
      <div className="card-info">
        <p className="card-age">{props.age}</p>
        <h1 className="card-title">{props.title}</h1>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
};

export default Card;
