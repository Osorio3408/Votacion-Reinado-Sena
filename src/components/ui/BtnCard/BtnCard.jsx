import React from "react";

export const BtnCard = ({ title, handleClick, id }) => {
  return (
    <button
      onClick={() => handleClick(id)}
      className="bg-green-500 hover:bg-green-700 text-white text-xl font-bold py-2 px-10 rounded">
      {title}
    </button>
  );
};
