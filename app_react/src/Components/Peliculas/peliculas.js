import React from "react";
import { Link } from "react-router-dom";
const Peliculas=({nombre,id,director,clasificacion,picture,duracion,onDelete,onEdit})=>{
    return(
        <tr className="bg-gray-800 text-gray-200">
            <td className="p-5">
                <img className="rounded-full h-12 w-12   object-cover" src={`http://localhost:9090/uploads/${picture}`} alt={"no hay"}/>

            </td>
            <td className="p-5">
                <div className="flex align-items-center">
                    <div className="ml-3">
                        <div className="">{nombre}</div>
                    </div>
                </div>
            </td>
            <td className="p-5">
                {clasificacion}
            </td>
            <td className="p-5 font-bold">
                {director}
            </td>
            <td className="p-5">
                <span className=" text-gray-50  rounded-md px-2">{duracion}</span>
            </td>
            <td className="p-5">

                <Link
                    to=""
                    type="button"
                    className="border border-yellow-600 bg-yellow-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-700 focus:outline-none focus:shadow-outline"
                >
                    Editar
                </Link>
            </td>
            <td className="p-5">
                <button
                    onClick={()=>onDelete(id)}
                    type="button"
                    className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}
export default Peliculas;