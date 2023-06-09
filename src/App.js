import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Examen from "./pages/Examen";
import ListaExamen from "./pages/ListaExamen";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listaexamen" element={<ListaExamen />} />
        <Route path="/examen" element={<Examen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
