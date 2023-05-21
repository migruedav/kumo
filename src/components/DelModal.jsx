import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import supabase from "../supabaseClient";

function DelModal({ nombre, id, setShowModal }) {
  //function to del id from supabase table "examen"
  const delExamen = async (id) => {
    const { data, error } = await supabase
      .from("examen")
      .delete()
      .match({ id: id });
    if (error) {
      alert(error.message);
    } else {
      setShowModal(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-black/80 fixed inset-0">
      <div className="flex justify-center flex-col items-center w-8/12 h-96 bg-white rounded-3xl">
        <h1>Borrar de la lista a</h1>
        <p>{nombre}</p>
        <div className="flex flex-row gap-20 my-10">
          <button
            onClick={() => {
              delExamen(id);
            }}
            className="flex justify-center items-center w-14 h-14 bg-red-500 rounded-full"
          >
            <AiFillDelete size={30} />
          </button>
          <button
            onClick={() => {
              setShowModal(false);
            }}
            className="flex justify-center items-center"
          >
            <AiFillCloseCircle size={60} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DelModal;
