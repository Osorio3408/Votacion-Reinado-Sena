import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 absolute w-full h-14 lg:h-24 flex dark:bg-neutral-800 lg:mb-96">
      <div className="flex items-center justify-between mx-auto flex-row">
        <div className="flex gap-3 items-center">
          <img
            src={"./logo-sena-verde-png-sin-fondo.png"}
            className="h-10 lg:h-14"
            alt="logo sena"
          />
          <span className="self-center text-3xl lg:text-5xl font-bold whitespace-nowrap dark:text-white">
            Bienestar al aprendiz
          </span>
        </div>
      </div>
    </nav>
  );
};
