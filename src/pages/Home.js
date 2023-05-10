import React from "react";
import Hero from "../components/Hero";
import QuienesSomos from "../components/QuienesSomos";
import Programas from "../components/Programas";
import Contacto from "../components/Contacto";

function Home() {
  return (
    <div>
      <Hero />
      <QuienesSomos />
      <Programas />
      <Contacto />
    </div>
  );
}

export default Home;
