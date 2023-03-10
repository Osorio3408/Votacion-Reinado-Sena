import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer class=" shadow py-5 dark:bg-neutral-800">
      <div class="">
        <div className="p-2 flex justify-center items-center lg:items-start lg:justify-start">
          <a
            href="https://www.sena.edu.co/es-co/Paginas/default.aspx"
            class="flex items-center sm:mb-0 gap-2 lg:gap-4">
            <img
              src={"./logo-sena-verde-png-sin-fondo.png"}
              className="h-10 lg:h-16"
              alt="logo sena"
            />
            <span class="self-center text-2xl lg:text-3xl font-semibold whitespace-nowrap dark:text-white">
              Bienestar al Aprendiz
            </span>
          </a>
        </div>
        <hr class="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
        <div className="flex flex-col">
          <span class="flex justify-center px-4 mt-5 lg:mt-0  lg:text-2xl self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Equipo de trabajo:
          </span>
          <div class="grid grid-cols-1 gap-8 px-6 py-1 mt-5">
            <ul class="flex flex-wrap justify-center items-center text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link to="https://github.com/Osorio3408" class="mr-4 text-base lg:text-lg hover:underline md:mr-6">
                  Yuliam Andrey Osorio (Diseñador){" "}
                </Link>
              </li>
              <li>
                <Link to="https://github.com/javelox" class="mr-4 text-base lg:text-lg hover:underline md:mr-6 ">
                  Juan Pablo Aranda (Diseñador)
                </Link>
              </li>
              <li>
                <Link to="https://github.com/teolio07" class="mr-4 text-base lg:text-lg hover:underline md:mr-6 ">
                  Jeison Rua (Desarollo)
                </Link>
              </li>
              <li>
                <Link to="https://github.com/aldana212" class="mr-4 text-base lg:text-lg hover:underline md:mr-6">
                  Jose Daniel Aldana (Desarollo)
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-2">
            <hr class="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
            <span class="flex justify-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
              Copyright © 2023 Todos los derechos reservados!
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
