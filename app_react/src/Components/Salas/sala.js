import { Link } from "react-router-dom";

const Sala = ({id,name,capacity,row,column,disable,onDelete}) => {
    return(
        <tr className="bg-gray-800 text-gray-200">
            <td className="p-5">
                <div className="flex align-items-center">
                    <div className="ml-3">
                        <div className="">{name}</div>
                    </div>
                </div>
            </td>
            <td className="p-5">
                {capacity}
            </td>
            <td className="p-5 font-bold">
                {row}
            </td>
            <td className="p-5 font-bold">
                {column}
            </td>
            <td className="p-5 font-bold">
                {disable}
            </td>
            <td className="p-5">

                <Link
                    to={`/editarPeliculas/${id}`}
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
    );
}

export default Sala;