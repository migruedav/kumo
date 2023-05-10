import React, { useState } from "react";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom";

function Examen() {

  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [colegio, setColegio] = useState("Ciudad de México");
  const [grado, setGrado] = useState("10 kyu");
  const [fecha, setFecha] = useState("2023-05-27");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase
      .from("examen")
      .insert([
        {
          nombre: nombre,
          colegio: colegio,
          grado: grado,
          fecha: new Date(fecha),
        },
      ]);
    if (error) console.log(error);
    else {
      alert("Examen registrado con éxito");
      navigate("/examen");
    }
  };

  return (
    <>
      <div className="m-5">
        <div className="flex flex-col justify-center items-center bg-gray-300 w-full py-20 rounded-3xl shadow-xl shadow-black/70">
          <form>
            <h1 className="text-center font-bold">INSCRIPCIÓN EXAMEN</h1>
            <label className="flex flex-col text-center my-4">
              Nombre del alumno:
              <input
                type="text"
                name="nombre"
                className="rounded-full text-center my-1 h-10"
                onChange={(e) => setNombre(e.target.value)}
              />
            </label>
            <label className="flex flex-col text-center my-4">
              Colegio:
              <select
                name="colegio"
                className="rounded-full text-center my-1 h-10"
                onChange={(e) => setColegio(e.target.value)}
              >
                <option value="Ciudad de México">Ciudad de México</option>
                <option value="Moderno Tepeyac">Moderno Tepeyac</option>
              </select>
            </label>
            <label className="flex flex-col text-center my-4">
              Grado:
              <select
                name="grado"
                className="rounded-full text-center my-1 h-10"
                onChange={(e) => setGrado(e.target.value)}
              >
                <option value="10">10 kyu</option>
                <option value="9">9 kyu</option>
                <option value="8">8 kyu</option>
                <option value="7">7 kyu</option>
                <option value="6">6 kyu</option>
                <option value="5">5 kyu</option>
                <option value="4">4 kyu</option>
                <option value="3">3 kyu</option>
                <option value="2">2 kyu</option>
                <option value="1">1 kyu</option>
                <option value="CN">CN</option>
              </select>
            </label>
            <label className="flex flex-col text-center my-4">
              Fecha en que presenta el examen:
              <select
                className="rounded-full text-center my-1 h-10"
                onChange={(e) => {
                  setFecha(e.target.value);
                }}
                type="date"
              >
                <option value="2023-05-27">Sábado 27 Mayo 9:00</option>
                <option value="2023-06-01">Jueves 01 Junio 3:20</option>
                <option value="2023-06-01">Jueves 01 Junio 4:45</option>
                <option value="2023-06-04">Sábado 03 Junio 9:00</option>
              </select>
            </label>
            <div className="w-full flex justify-center items-center">
              <button
                type="submit"
                className="bg-black rounded-full text-white w-40 h-10"
                onClick={handleSubmit}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Examen;
