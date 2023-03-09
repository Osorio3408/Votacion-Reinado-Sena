import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-neutral-800">
      <div className="flex items-center justify-between mx-auto flex-row">
        <div className="flex gap-3 items-center">
          <img
            src={"./logo-sena-verde-png-sin-fondo.png"}
            className="h-8 sm:h-9"
            alt="logo sena"
          />
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
            Bienestar al aprendiz
          </span>
        </div>
        
      </div>
    </nav>
  );
};
