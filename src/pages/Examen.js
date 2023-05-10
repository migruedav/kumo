import React, { useState } from "react";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom";

function Examen() {

  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [colegio, setColegio] = useState("Ciudad de México");
  const [grado, setGrado] = useState("10 kyu");
  const [fecha, setFecha] = useState(new Date('2023-05-27'));
  const [hora, setHora] = useState(9);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase
      .from("examen")
      .insert([
        {
          nombre: nombre,
          colegio: colegio,
          grado: grado,
          fecha: fecha,
          hora: hora,
        },
      ]);
    if (error) console.log(error);
    else {
      navigate("/listaexamen");
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
                <option value="10 kyu">10 kyu</option>
                <option value="9 kyu">9 kyu</option>
                <option value="8 kyu">8 kyu</option>
                <option value="7 kyu">7 kyu</option>
                <option value="6 kyu">6 kyu</option>
                <option value="5 kyu">5 kyu</option>
                <option value="4 kyu">4 kyu</option>
                <option value="3 kyu">3 kyu</option>
                <option value="2 kyu">2 kyu</option>
                <option value="1 kyu">1 kyu</option>
                <option value="CN">CN</option>
              </select>
            </label>
            <label className="flex flex-col text-center my-4">
              Fecha en que presenta el examen:
              <select
                className="rounded-full text-center my-1 h-10"
                onChange={(e) => {
                  setFecha(e.target.value.slice(0,10));
                  setHora(parseInt(e.target.value.slice(11,12),10));

                }}
                type="date"
              >
                <option value='2023-05-27T9:00'>Sábado 27 Mayo 9:00</option>
                <option value='2023-06-01T3:20'>Jueves 01 Junio 3:20</option>
                <option value='2023-06-01T4:45'>Jueves 01 Junio 4:45</option>
                <option value='2023-06-03T9:00'>Sábado 03 Junio 9:00</option>
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
