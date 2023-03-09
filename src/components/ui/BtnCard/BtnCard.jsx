import React from "react";

export const BtnCard = ({title,handleClick, id}) => {
  return (
    <button onClick={()=>handleClick(id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">
      {title}
    </button>
  );
};
