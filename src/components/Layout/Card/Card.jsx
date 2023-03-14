import React, { useState } from "react";
import { BtnCard } from "../../ui/BtnCard/BtnCard";
import { LoadingTwo } from "../../ui/Loading/Loading";


export const Card = ({ name, image, handleClick, id }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  }


  return (
    <div class="bg-slate-50 flex  md:w-1/4 items-center flex-col rounded-lg shadow-neutral-800 shadow-lg overflow-hidden p-4">
      <div className="rounded-md w-72 h-48">
        {!isLoaded && (
          <LoadingTwo />
        )}
        <img src={image} className={`block w-full h-full object-cover animate-none opacity-0 ${isLoaded && 'opacity-100'}`} onLoad={handleImageLoad} alt="jajaj" />
      </div>
      <div class="py-4 px-6">
        <h2 class="text-2xl font-bold text-neutral-900">{name}</h2>
        <p class="mt-2 text-gray-600"></p>
      </div>
      <div class=" px-6 py-4 text-center">
        <BtnCard handleClick={handleClick} id={id} title={'Votar!'} />
      </div>
    </div>
  );
};
