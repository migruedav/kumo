import React from "react";
import "./Programas.css";
import Card from "./Card";
import Mick from "../images/mick.png";
import Kenzo from "../images/kenzo.png";
import Emi from "../images/emi.png";

const Programas = () => {
  return (
    <div className="programas-container">
      <h1 className="programas-title">Programas de enseñanza</h1>
      <div className="card-container">
        <Card
          image={Mick}
          age="De 4 a 7 años"
          title="PreKarate"
          text="Es la clase para nuestros alumnos más pequeños. Nuestro programa se enfoca en el desarrollo psicomotor de los niños por medio de entrenamientos, juegos y actividades físicas en las que enseñamos las bases del Karate Do."
        />
        <Card
          image={Kenzo}
          age="De 7 a 19 años"
          title="Karate niños y adolescentes"
          text="En esta etapa el objetivo del entrenamiento es enseñar a  los niños y jóvenes los ejercicios y  técnicas de Kata y Kumite que los lleven a la correcta ejecución del Karate Do tanto en nivel técnico como físico atlético."
        />
        <Card
          image={Emi}
          age="De 14 años en adelante"
          title="Karate Competencia y Adultos"
          text="Dirigido tanto a los jóvenes que han decidido formar parte de nuestro equipo de competencia para representar dignamente a nuestra academia y a nuestro país en eventos de nivel internacional; como para adultos que desean disfrutar de los beneficios del Karate Do."
        />
      </div>
    </div>
  );
};

export default Programas;
