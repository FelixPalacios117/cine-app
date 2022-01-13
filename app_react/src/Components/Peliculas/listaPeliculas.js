import React, { useEffect, useState } from "react";
import Navbar from "../../Layouts/NavBar";
import { Link } from "react-router-dom";
import axiosCliente from "../../Config/axiosCliente";
const ListaPeliculas = () => {
    const [peliculas, setPeliculas] = useState([])
    useEffect(() => {
        getPeliculas()
    }, [])
    const getPeliculas = async () => {
        const respuesta = await axiosCliente.get('/list-movie')
        console.log(respuesta.data)
    }
    return (
        <div className=" min-h-screen bg-gray-900">
            <Navbar className=" h-full" type={"pelicula"} />
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
                                    <tr className="bg-gray-800 text-gray-200">
                                        <td className="p-5">
                                            <img className="rounded-full h-12 w-12   object-cover" src="https://images.unsplash.com/photo-1600856209923-34372e319a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2135&q=80" alt="unsplash image" />

                                        </td>
                                        <td className="p-5">
                                            <div className="flex align-items-center">
                                                <div className="ml-3">
                                                    <div className="">Samsung</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-5">
                                            Technology
                                        </td>
                                        <td className="p-5 font-bold">
                                            200.00$
                                        </td>
                                        <td className="p-5">
                                            <span className=" text-gray-50  rounded-md px-2">start sale</span>
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
                                                type="button"
                                                className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ListaPeliculas;