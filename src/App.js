import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero";
import QuienesSomos from "./components/QuienesSomos";
import Programas from "./components/Programas";
import Contacto from "./components/Contacto";


function App() {
  return (
    <div>
      <Hero />
      <QuienesSomos />
      <Programas />
      <Contacto />
    </div>
  );
}

export default App;
