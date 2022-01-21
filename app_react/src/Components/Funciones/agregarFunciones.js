import React, { useEffect, useState } from "react";
import NavBar from "../../Layouts/NavBar";
import CardPelicula from "./cardPelicula";
import CardSala from "./cardSala";
import axiosCliente from "../../Config/axiosCliente";
import Swal from "sweetalert2";

const AgregarFunciones = (props) => {
  const [peliculas, setPeliculas] = useState([]);
  const [salas, setSalas] = useState([]);
  const [datos, setDatos] = useState({
    idSala: "",
    idPelicula: "",
    sala: "",
    pelicula: "",
    hora: null,
  });
  useEffect(() => {
    getPeliculas();
    getSalas();
  }, []);
  const getPeliculas = async () => {
    const respuesta = await axiosCliente.get("/list-movie");
    setPeliculas(respuesta.data);
  };
  const getSalas = async () => {
    const respuesta = await axiosCliente.get("/list-sala");
    setSalas(respuesta.data);
  };
  const handleSelectMovie = (name, id) => {
    setDatos({ ...datos, pelicula: name, idPelicula: id });
  };
  const handleSelectSala = (name, id) => {
    setDatos({ ...datos, sala: name, idSala: id });
  };
  const handleAddFuncion = () => {
    agregarFuncion();
  };
  const agregarFuncion = async () => {
    const funcion = {
      idPelicula: datos.idPelicula,
      idSala: datos.idSala,
      horario: datos.hora,
    };
    await axiosCliente.post("/new-funcion", funcion).then((res) => {
      console.log(res);
      if (res.status === 200) {
        Swal.fire("Agregar funcion", res.data.message, "success");
        props.history.push("/listaFunciones");
      } else {
        Swal.fire("Agregar funcion", res.data.message, "error");
      }
    });
  };
  const handleChange = (e) => {
    setDatos({ ...datos, hora: e.target.value });
  };
  return (
    <>
      <div className="min-h-screen  bg-gray-900">
        <NavBar type="funcion"></NavBar>
        <div className="flex flex-col">
          <div className="grid grid-cols-10 py-8 px-24  ">
            <div className="md:col-span-10 lg:col-span-3 bg-gray-800 flex pl-2 items-center text-white lg:text-lg lg:font-semibold sm:text-white sm:text-md font-semibold rounded-md">
              <h1 className="">Pelicula seleccionada : {datos.pelicula} </h1>
            </div>
            <div className="sm:col-span-10 lg:col-span-3 bg-gray-800 flex pl-2 items-center text-white text-lg rounded-md  mx-2">
              <h1 className="">Sala seleccionada : {datos.sala} </h1>
            </div>
            <div className="col-span-4 flex pl-2 justify-evenly items-center  px-2 h-20 bg-gray-800 rounded-md">
              <h1 className="text-white px-2 text-lg">Horario</h1>
              <input
                type="datetime-local"
                onChange={handleChange}
                className=" px-4 py-1 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              ></input>
              <button
                type="button"
                onClick={handleAddFuncion}
                className=" border border-blue-600 bg-blue-600 text-white rounded-md px-3 py-1 m-2 transition duration-500 ease select-none hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              >
                Agregar una funcion
              </button>
            </div>
          </div>
          <div className="flex justify-center text-white text-xl font-semibold">
            <h2 className="">Lista de peliculas</h2>
          </div>
          <div className="flex space-x-2 shadow-md rounded-lg overflow-x-auto  py-2">
            {peliculas.map((item, index) => (
              <CardPelicula
                name={item.name}
                key={index}
                id={item._id}
                image={item.picture}
                director={item.director}
                duration={item.duration}
                onSelectMovie={handleSelectMovie}
              />
            ))}
          </div>
          <div className=" flex  space-x-2 pt-4 pb-1 justify-center  overflow-x-auto  w-full">
            {salas.map((item, index) => (
              <CardSala
                id={item._id}
                key={index}
                name={item.name}
                capacity={item.capacity}
                onSelectSala={handleSelectSala}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AgregarFunciones;
