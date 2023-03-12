import React from "react";
import { Footer } from "../../Layout/Footer/Footer";

export const Results = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-5 sm:px-6 lg:px-8 pt-60 lg:mb-36">
        <h1 className="text-3xl font-bold mb-6">Resultados de la votación:</h1>
        <div className="bg-white overflow-hidden shadow rounded-lg mb-10">
          {/* Espacio para la gráfica de resultados */}
          <div className="w-full h-64"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
