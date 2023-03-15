import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "../Card/Card";
import { toast } from "react-toastify";
import { Footer } from "../Footer/Footer";
import { getParticipants, postVotos } from "../../helpers/ApiRest";
import { Loading } from "../../ui/Loading/Loading";
import { OptionsAlert } from "../../helpers/ToastResp";
import { OptionsSweetAlert } from "../../helpers/ToastResp";
import { useNavigate } from "react-router-dom";
import { HomeEs } from "../HomeEs/HomeEs";
import io from "socket.io-client";
const Swal = require('sweetalert2')

const socket = io('https://projectvotessena.azurewebsites.net')


export const Body = () => {
  const navigate = useNavigate();

  const [information, setInformation] = useState([]);
  const [search, setSearch] = useState("");
  const [isloading, setIsloading] = useState(true);
  const [showComponent, setShowComponent] = useState(false);


  const handle = (e) => {
    setSearch(e.target.value)
  }

    //filtro
    const result = !search
    ? information
    : information.filter((data) =>
      data.name.toLowerCase().includes(search.toLowerCase())
    );

  const handleClick = async (id) => {
    let userId = JSON.parse(localStorage.getItem("id_votante"));
    Swal.fire(OptionsSweetAlert).then(async (result) => {
      if (result.isConfirmed) {
        setShowComponent(true);
        await axios
          .patch(`${postVotos}/${id}/${userId}`)
          .then((responde) => {
            setShowComponent(true);
            localStorage.removeItem("id_votante");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
  };

  useEffect(() => {
    if (showComponent) {
      setTimeout(() => {
        setShowComponent(false);
        toast.success("gracias por tu voto", OptionsAlert)
        navigate('/')
      }, 1000);

    }
  }, [showComponent])

  //peticion de los datos y restincion
  useEffect(() => {
    let userId = JSON.parse(localStorage.getItem("id_votante"));
    if (userId === null) {
      navigate("/");
    } else {
      getPartcipe();
    }
  }, []);

    //duncion que pide los datos
    const getPartcipe = async () => {
      await axios
        .get(getParticipants)
        .then(({ data }) => {
          setInformation(data)
          setIsloading(false)
        })
        .catch((err) => {
          console.log("servidor");
        });
    };

  return (
    <>
      {isloading ? (
        <Loading />
      ) : showComponent ? <HomeEs /> : (
        <div>
          <div className="bg-slate-500 h-screen overflow-auto md:overflow-auto ">
            <div className="flex justify-center items-center text-2xl bg-neutral-800 border-white border-t mt-14 lg:mt-24 h-12 text-center font-semibold text-white">
              <div class="flex text-gray-600 mx-40 w-screen h-screen justify-center items-center lg:px-96  ">
                <input
                  class="w-80  lg:w-4/5 border-2 border-gray-300 bg-white h-9 px-3 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                  type="search"
                  name="search"
                  value={search}
                  onChange={handle}
                  placeholder="Buscar"
                />
              </div>
            </div>
            <div className="mt-5">
              <h1 className="text-black font-bold text-3xl mb-0 text-center">
                Selecciona a tu mejor participante!
              </h1>
              <div className="flex gap-5 flex-col  md:flex-row md:flex-wrap justify-center items-center p-5">
                {
                  result.map((data) => (
                    <Card
                      name={data.name}
                      image={data.image}
                      id={data._id}
                      handleClick={handleClick}
                    />
                  ))}
              </div>
            </div>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};
