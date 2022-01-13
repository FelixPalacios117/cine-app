import Navbar from "../../Layouts/NavBar"
import { Link } from "react-router-dom";
import { Fragment } from "react";

const ListaFunciones = () => {
    return (
        <div className=" min-h-screen bg-gray-900">
            <Navbar className=" h-full" type={"funcion"} />
            <section className=" h-full">


                <div className="flex justify-center items-center my-4">
                    <h1 className="  text-white text-xl   text-center">Listado de Pelicula</h1>
                    <Link
                        type="button"
                        to="/agregarPelicula"
                        className=" border border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                    >
                        Agregar una pelicula
                    </Link>
                </div>
                <div className="flex justify-center h-max   bg-gray-900  ">
                    <div className="col-span-12 ">
                        <div className="overflow-auto lg:overflow-visible ">
                            <table className="table border-separate space-y-12 text-m ">
                                <thead className="bg-gray-800 text-gray-300 pb-4">
                                    <tr className="">
                                        <th className="p-5   ">Imagen</th>
                                        <th className="p-5 text-left">Nombre</th>
                                        <th className="p-5 text-left">Clasificacion</th>
                                        <th className="p-5 text-lef  ">Director</th>
                                        <th className="p-5 text-left">Duracion</th>
                                        <th className="p-5 text-left">Editar</th>
                                        <th className="p-5 text-left ">Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ListaFunciones;