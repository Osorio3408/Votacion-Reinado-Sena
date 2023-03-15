import React, { useState, useEffect } from "react";
import { Footer } from "../../Layout/Footer/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { VerifyUsers } from "../../helpers/ApiRest";
import { toast } from "react-toastify";
import { OptionsAlert } from "../../helpers/ToastResp";
import { BtnForm } from '../../ui/BtnCard/BtnCard'

export const Validation = () => {
  const navigate = useNavigate();

  const [idNumber, setIdNumber] = useState("");
  const [isBtn, setIsBtn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica para procesar el envío del formulario aquí
    if (idNumber !== "") {
      setIsBtn(true)
      if (idNumber === "5551") {
        setTimeout(() => {
          localStorage.setItem("id_votante", JSON.stringify(idNumber));
          setIsBtn(false)
          navigate("/results");
        }, 1000);
      } else if (idNumber === "123") {
        setTimeout(() => {
          localStorage.setItem("id_votante", JSON.stringify(idNumber));
          setIsBtn(false)
          navigate("/form");
        }, 1000)
      } else {
        await axios
          .get(`${VerifyUsers}/${idNumber}`)
          .then(({ data }) => {
            if (data.status === false) {
              toast.error("Perdón, tú ya votaste!!", OptionsAlert);
              setIsBtn(false)
            } else {
              localStorage.setItem("id_votante", JSON.stringify(idNumber));
              navigate("/card");
              setIsBtn(false)
            }
          })
          .catch((err) => {
            setTimeout(() => {
              setIsBtn(false)
              toast.error("No estás ingresado en el Sena!!", OptionsAlert);
            }, 1000);
          });
      }
    } else {
       setIsBtn(false)
      toast.error("Ingresa tú número de indentificación!!", OptionsAlert);
    }
  };

  return (
    <div>
      <div className=" bg-gray-100 flex flex-col justify-center items-center h-screen p-5">
        <div className="bg-white lg:w-2/5 p-10 lg:mt-20 md:mt-0 rounded-lg shadow-slate-500 shadow-lg">
          <h1 className="text-lg lg:text-3xl font-semibold text-center mb-10">
            <strong>¡Bienvenido/a al reinado!</strong> Para comenzar, por favor
            ingresa el número de identificación en el espacio a continuación y
            presiona el botón "Ingresar" para poder acceder a la votación.
            ¡Gracias por ser parte de este gran evento!
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="lg:mt-16 mt-10 mb-2 lg:mb-8">
              <label
                className="block text-lg lg:text-2xl text-gray-700 font-bold mb-2 text-center"
                htmlFor="idNumber">
                Ingresa tu número de identificación:
              </label>
              <input
                className="shadow-lg  appearance-none border border-neutral-400 rounded w-full mt-2 py-3 lg:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="idNumber"
                type="number"
                placeholder="Número de identificación"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              {isBtn ? <BtnForm /> :
              <button
                className="bg-green-600 hover:bg-green-700 text-white font-bold lg:py-3 lg:px-12 py-2 px-10 mt-8 rounded-md focus:outline-none focus:shadow-outline"
                type="submit">
                Ingresar
              </button>
              }
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
