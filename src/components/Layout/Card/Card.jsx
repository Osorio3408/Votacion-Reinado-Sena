import React from "react";
import { BtnCard } from "../../ui/BtnCard/BtnCard";

export const Card = (props) => {
  return (
    <div class="bg-gray-200 flex md:w-80 lg:w-1/4 items-center flex-col rounded-lg shadow-xl overflow-hidden p-4">
      <div className="bg-slate-800 rounded-md w-72 h-48 object-cover"></div>
      <div class="py-4 px-6">
        <h2 class="text-2xl font-bold text-gray-800">{props.name}</h2>
        <p class="mt-2 text-gray-600">{props.description}</p>
      </div>
      <div class=" px-6 py-4 text-center">
        <BtnCard title={'Votar!'} />
      </div>
    </div>
  );
};
