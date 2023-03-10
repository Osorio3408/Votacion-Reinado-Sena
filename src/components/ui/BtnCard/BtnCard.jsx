import React from "react";

export const BtnCard = ({title,handleClick, id, acti_desact}) => {
  return (
    <button onClick={() =>handleClick(id)} disabled={!acti_desact} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">
      {title}
    </button>
  );
};
