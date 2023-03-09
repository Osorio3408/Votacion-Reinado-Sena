import React from "react";

export const BtnCard = (props) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">
      {props.title}
    </button>
  );
};
