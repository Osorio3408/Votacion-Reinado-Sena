import React from "react";
import { Card } from "../Card/Card";

export const Body = () => {
  return (
    <div className="bg-slate-500 h-screen overflow-scroll lg:overflow-auto  pb-5 md:pb-10 ">
      <div className="flex justify-center items-center text-2xl bg-neutral-800 border-white border-t  h-12 text-center font-semibold text-white">
      <div class="flex text-gray-600 mx-40 w-screen justify-center items-center lg:px-96">

          <input
            class="w-80  lg:w-4/5 border-2 border-gray-300 bg-white h-9 px-3 rounded-lg text-sm focus:outline-none focus:border-gray-400"
            type="search"
            name="search"
            placeholder="Buscar"
          />
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-black font-bold text-3xl mb-5 text-center">
          Selecciona a tu mejor participante!
        </h1>
        <div className="flex gap-5 flex-col  md:flex-row md:flex-wrap justify-center items-center p-5 ">
          <Card
            name="Juan Pablo Aranda Herreño"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            culpa tenetur fugiat quo illo nesciunt quam nemo aliquam, quia quis odit
          ea sint quas, dicta ad debitis placeat! Iste, provident."
          />
          <Card
            name="Juan Pablo Aranda Herreño"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            culpa tenetur fugiat quo illo nesciunt quam nemo aliquam, quia quis odit
          ea sint quas, dicta ad debitis placeat! Iste, provident."
          />
          <Card
            name="Juan Pablo Aranda Herreño"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            culpa tenetur fugiat quo illo nesciunt quam nemo aliquam, quia quis odit
          ea sint quas, dicta ad debitis placeat! Iste, provident."
          />
          <Card
            name="Juan Pablo Aranda Herreño"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            culpa tenetur fugiat quo illo nesciunt quam nemo aliquam, quia quis odit
          ea sint quas, dicta ad debitis placeat! Iste, provident."
          />
          <Card
            name="Juan Pablo Aranda Herreño"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            culpa tenetur fugiat quo illo nesciunt quam nemo aliquam, quia quis odit
          ea sint quas, dicta ad debitis placeat! Iste, provident."
          />
          <Card
            name="Juan Pablo Aranda Herreño"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            culpa tenetur fugiat quo illo nesciunt quam nemo aliquam, quia quis odit
          ea sint quas, dicta ad debitis placeat! Iste, provident."
          />
        </div>
      </div>
    </div>
  );
};
