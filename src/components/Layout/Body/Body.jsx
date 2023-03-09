import React from "react";
import { Card } from "../Card/Card";

export const Body = () => {
  return (
    <div className="bg-slate-200 h-screen overflow-scroll sm:overflow-hidden pb-28">
      <div className="flex justify-center items-center text-2xl bg-neutral-800 border-white border-t  h-12  text-center font-semibold text-white">
      <div class="text-gray-600 mx-40">

          <input
            class="w-80  border-2 border-gray-300 bg-white h-9 px-3 rounded-lg text-sm focus:outline-none focus:border-gray-400"
            type="search"
            name="search"
            placeholder="Buscar"
          />
          <button
            type="submit"
            class="absolute right-0 top-0 mt-3 mr-4"></button>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-black font-bold text-3xl mb-5 text-center">
          Selecciona a tu mejor participante!
        </h1>
        <div className="flex gap-5 flex-col  md:flex-row md:flex-wrap justify-center items-center p-5">
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
