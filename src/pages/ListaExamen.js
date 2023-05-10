import React, { useEffect, useState } from "react";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom";

function ListaExamen() {
  //VARIABLES
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  //FETCH DATA

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("examen")
        .select("*")
        .order("fecha", { ascending: true })
        .order("hora", { ascending: true })
        .order("grado", { ascending: true })
        .order("nombre", { ascending: true });
      if (error) console.log(error);
      else setData(data);
    }
    fetchData();
  }, []);

  //RETURN
  return (
    <>
      {data.map((examen) => (
        <div
          key={examen.id}
          className="flex flex-row justify-center items-center h-10 my-2"
        >
          <div className="bg-black text-white w-1/6 rounded-l-full text-center flex items-center justify-center h-10">
            {examen.fecha.slice(8, 10)}-{examen.hora}
          </div>
          <div className="bg-gray-600 text-white w-3/6 h-10 flex items-center justify-center">
            {examen.nombre.slice(0, 20)}
          </div>
          <div className="bg-black text-white h-10 rounded-r-full w-1/6 flex justify-center items-center">
            {examen.grado}
          </div>
        </div>
      ))}

      <button
        onClick={() => {
          navigate("/examen");
        }}
        className="h-14 w-14 bg-black text-white flex justify-center items-center rounded-full font-extrabold fixed top-10 right-5 border-2 border-white"
      >
        X
      </button>
    </>
  );
}

export default ListaExamen;
