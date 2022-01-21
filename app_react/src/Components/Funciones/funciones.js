import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Funciones = (props) => {
  return (
    <tr className="bg-gray-800 text-gray-200">
      <td className="p-5">
        <img
          className="rounded-full h-12 w-12   object-cover"
          src={`http://localhost:9090/uploads/${props.image}`}
          alt={"no hay"}
        />
      </td>
      <td className="p-5">{props.sala}</td>
      <td className="p-5">{props.pelicula}</td>
      <td className="p-5">{props.clasificacion}</td>
      <td className="p-5 font-bold">{props.director}</td>
      <td className="p-5">
        <span className=" text-gray-50  rounded-md px-2">{props.duracion}</span>
      </td>
      <td className="p-5">
        <span className=" text-gray-50  rounded-md px-2">{props.hora}</span>
      </td>
      {props.onDelete ? (
        <Fragment>
          <td className="p-5">
            <Link
              to={`/editarFuncion/${props.id}`}
              type="button"
              className="border border-yellow-600 bg-yellow-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-700 focus:outline-none focus:shadow-outline"
            >
              Editar
            </Link>
          </td>
          <td className="p-5">
            <button
              onClick={() => props.onDelete(props.id)}
              type="button"
              className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
            >
              Eliminar
            </button>
          </td>
        </Fragment>
      ) : (
        <td className="p-5">
            <Link
              to={`/seleccionarAsientos/${props.id}`}
              type="button"
              className="border border-green-600 bg-green-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-700 focus:outline-none focus:shadow-outline"
            >
              Selecionar
            </Link>
          </td>
      )}
    </tr>
  );
};

export default Funciones;
