import React, { useEffect, useState } from "react";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import { IoListCircleSharp } from "react-icons/io5";

function Examen() {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [colegio, setColegio] = useState("Kumo");
  const [grado, setGrado] = useState("10 kyu");
  const [fecha, setFecha] = useState(new Date("2023-06-17"));
  const [hora, setHora] = useState(8);
  const [alumnos, setAlumnos] = useState([]);

  const retrieveData = async () => {
    const { data, error } = await supabase
      .from("alumnos")
      .select("nombre")
      .order("nombre", { ascending: true });
    if (error) console.log(error);
    else {
      setAlumnos(data);
    }
  };

  useEffect(() => {
    retrieveData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase.from("examen").insert([
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
   console.log(fecha);
  return (
    <>
      <div className="m-5 flex justify-center">
        <div className="flex flex-col justify-center items-center bg-gray-300 w-full py-20 rounded-3xl shadow-xl shadow-black/70 max-w-xl">
          <form>
            <h1 className="text-center font-bold">INSCRIPCIÓN EXAMEN</h1>
            <label className="flex flex-col text-center my-4">
              Nombre del alumno:
              <select
                name="nombredelalumno"
                className="rounded-full text-center my-1 h-10"
                onChange={(e) => setNombre(e.target.value)}
              >
                <option value="None" key="">Alumno</option>
                {alumnos.map((alumno, index) => (
                  <option key={index} value={alumno.nombre}>
                    {alumno.nombre}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="nombre"
                className="rounded-full text-center my-1 h-10"
                onChange={(e) => setNombre(e.target.value)}
              />
            </label>
            {/*<label className="flex flex-col text-center my-4">
              Colegio:
              <select
                name="colegio"
                className="rounded-full text-center my-1 h-10"
                onChange={(e) => setColegio(e.target.value)}
              >
                <option value="Kumo">Kumo Karate Do</option>
                <option value="Ciudad de México">Ciudad de México</option>
                <option value="Moderno Tepeyac">Moderno Tepeyac</option>
              </select>
                </label>*/}
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
                <option value="CN2">CN 2 Dan</option>
                <option value="6 kyu Pre">6 kyu Prekarate</option>
                <option value="5 kyu Pre">5 kyu Prekarate</option>
                <option value="4 kyu Pre">4 kyu Prekarate</option>
                <option value="3 kyu Pre">3 kyu Prekarate</option>
                <option value="2 kyu Pre">2 kyu Prekarate</option>
                <option value="1 kyu Pre">1 kyu Prekarate</option>

              </select>
            </label>
            <label className="flex flex-col text-center my-4">
              Fecha en que presenta el examen:
              <select
                className="rounded-full text-center my-1 h-10"
                onChange={(e) => {
                  setFecha(e.target.value.slice(0, 10));
                  setHora(parseInt(e.target.value.slice(11, 12), 10));
                }}
                type="date"
              >
                <option value="2023-06-17T8:00">8:00</option>
                <option value="2023-06-17T9:30">9:30</option>
                <option value="2023-06-17T10:45">10:45</option>
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
          <button
            onClick={() => {
              navigate("/listaexamen");
            }}
            className="h-14 w-14 bg-black text-white flex justify-center items-center rounded-full font-extrabold fixed top-10 right-7 border-2 border-white"
          >
            <IoListCircleSharp size={30} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Examen;
