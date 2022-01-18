import React from "react";
import NavBar from "../../Layouts/NavBar";
import CardPelicula from "./cardPelicula";
import CardSala from "./cardSala";

const AgregarFunciones = () => {
  return (
    <>
      <div className="min-h-screen  bg-gray-900">
        <NavBar type="funcion"></NavBar>
        <div className="flex flex-col">
          <div className="grid grid-cols-10 py-8 px-24  ">
            <div className="col-span-3 bg-gray-800 flex pl-2 items-center text-white text-lg rounded-md">
              <h1 className="">Pelicula seleccionada : </h1>
            </div>
            <div className="col-span-3 bg-gray-800 flex pl-2 items-center text-white text-lg rounded-md  mx-2">
              <h1 className="">Sala seleccionada : </h1>
            </div>
            <div className="col-span-4 flex pl-2 justify-center items-center  px-2 h-20 bg-gray-800 rounded-md">
              <h1 className="text-white px-2 text-lg">Horario</h1>
              <input
                type="time"
                defaultValue={"00:00"}
                className=" px-4 py-1 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              ></input>
              <button
                type="button"
                className=" border border-blue-600 bg-blue-600 text-white rounded-md px-3 py-1 m-2 transition duration-500 ease select-none hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              >
                Agregar una funcion
              </button>
            </div>
          </div>
          <div className="flex space-x-2  shadow-md rounded-lg overflow-x-auto  py-1 w-full">
          <CardPelicula />
          <CardPelicula />
          <CardPelicula />
          <CardPelicula />
          <CardPelicula />
          <CardPelicula />
          <CardPelicula />
          <CardPelicula />
          </div>
          <div className=" flex  space-x-2 pt-4 pb-1 justify-center  overflow-x-auto  w-full">
            <CardSala />
            <CardSala />
            <CardSala />
            <CardSala />
            <CardSala />
            <CardSala />
            <CardSala />
            <CardSala />
            <CardSala />
            <CardSala />
            <CardSala />
            <CardSala />
            <CardSala />
            <CardSala /> 
            <CardSala />
          </div>
        </div>
      </div>
    </>
  );
};

export default AgregarFunciones;
