import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "../Card/Card";
import { toast } from "react-toastify";
import { getParticipants, postVotos } from "../../helpers/ApiRest";

export const Body = () => {
  const [information, setInformation] = useState([]);
  const [search, setSearch] = useState("");

  const getPartcipe = async () => {
    await axios
      .get(getParticipants)
      .then(({ data }) => {
        setInformation(data);
        console.log(data);
      })
      .catch((err) => {
        console.log("servidor");
      });
  };

  const handle = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = async (id) => {
    // console.log(id);
    await axios
      .patch(`${postVotos}/${id}`)
      .then((responde) => {
        toast.success("¡Éxito!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          className: "flex justify-center items-center",
        });
      })
      .catch((err) => {
        console.log("servidor");
      });
  };

  const result = !search
    ? information
    : information.filter((data) =>
        data.name.toLowerCase().includes(search.toLowerCase())
      );

  useEffect(() => {
    getPartcipe();
  }, []);

  return (
    <div className="bg-white h-screen overflow-scroll lg:overflow-auto  pb-5 md:pb-10 ">
      <div className="flex justify-center items-center text-2xl bg-neutral-800 border-white border-t  h-12 text-center font-semibold text-white">
        <div class="flex text-gray-600 mx-40 w-screen justify-center items-center lg:px-96">
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
        <h1 className="text-black font-extrabold text-3xl lg:text-6xl mb-5 text-center lg:mt-24">
          Elige a tu mejor participante!
        </h1>
        <div className="flex gap-5 flex-col lg:gap-14 md:flex-row md:flex-wrap justify-center items-center p-5">
          {result.map((data) => (
            <Card
              name={data.name}
              image={data.image}
              id={data._id}
              handleClick={handleClick}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            culpa tenetur fugiat quo illo nesciunt quam nemo aliquam, quia quis odit
          ea sint quas, dicta ad debitis placeat! Iste, provident."
            />
          ))}
        </div>
      </div>
    </div>
  );
};
