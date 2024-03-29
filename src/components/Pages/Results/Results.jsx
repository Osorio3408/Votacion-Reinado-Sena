import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import axios from "axios";
import { getParticipants } from "../../helpers/ApiRest";
import { Loading } from "../../ui/Loading/Loading";
import { Footer } from "../../Layout/Footer/Footer";
import io from "socket.io-client";

const socket = io("https://socket-api-vote.up.railway.app");

export const Results = () => {
  const navigate = useNavigate();
  const [datos, setDatos] = useState([]);
  const [isloading, setIsloading] = useState(true);

  socket.on("participants", (participants) => setDatos(participants));

  //funcion que pide los datos
  const getPartcipe = async () => {
    await axios
      .get(getParticipants)
      .then(({ data }) => {
        setIsloading(false);
        setDatos(data);
      })
      .catch((err) => {
        console.log(`Servidor ${err}`);
      });
  };

  useEffect(() => {
    // let userId = JSON.parse(localStorage.getItem("id_votante"));
    // if (userId === null) {
    //   navigate("/");
    // } else {
    getPartcipe();
    // }
  }, []);

  const data = {
    labels: datos.map((categoria) => {
      return categoria.name;
    }),
    datasets: [
      {
        label: "Votos",
        data: datos.map((serie) => {
          return serie.votes;
        }),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      {isloading ? (
        <Loading />
      ) : (
        <div className="bg-gray-100 min-h-screen">
          <div className="max-w-7xl mx-auto py-32 px-5 sm:px-6 lg:px-8 pt-40 lg:mb-32">
            <h1 className="text-3xl font-bold mb-4">
              Resultados de la votación:
            </h1>
            <div className="bg-white overflow-hidden shadow rounded-lg mb-10">
              {/* Espacio para la gráfica de resultados */}
              <div className="w-full h-72 ">
                <div className="w-full h-full flex justify-center items-center">
                  <Bar data={data} />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};
