import React from 'react'
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
   
    <footer class=" shadow md:px-6 md:py-8 dark:bg-neutral-800">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://www.sena.edu.co/es-co/Paginas/default.aspx" class="flex items-center sm:mb-0">
            <img
            src={"./logo-sena-verde-png-sin-fondo.png"}
            className="h-8 sm:h-9 m-3"
            alt="logo sena"
            />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Bienestar al Aprendiz</span>
            </a>
            <hr class="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className='2xl: flex flex-col'>
            <span class="flex justify-center px-4 mt-5 self-center text-base font-semibold whitespace-nowrap dark:text-white">Aplicativo web creado</span>
            <div class="grid grid-cols-1 gap-8 px-6 py-1 md:grid-cols-2">
            <ul class="flex flex-wrap justify-center items-center text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <Link to="#" class="mr-4 hover:underline md:mr-6 ">Juan Pablo Aranda (Diseñador)</Link>
                </li>
                <li>
                    <Link to="#" class="mr-4 hover:underline md:mr-6">Yuliam Andrey Osorio (Diseñador) </Link>
                </li>
                <li>
                    <Link to="#" class="mr-4 hover:underline md:mr-6 ">Jeison Rua (Desarollo)</Link>
                </li>
                <li>
                    <Link to="#" class="mr-4 hover:underline md:mr-6">Jose Daniel Aldana (Desarollo)</Link>
                </li>
            </ul>
                <span class="flex justify-center text-sm text-gray-500 sm:text-center dark:text-gray-400">Copyright © 2023 All rights reserved</span>
            </div>
            </div>
        </div>
    </footer>
 
  )
}
