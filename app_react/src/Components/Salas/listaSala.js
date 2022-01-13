import React, { useEffect, useState } from "react";
import Navbar from "../../Layouts/NavBar";
import { Link } from "react-router-dom";
import axiosCliente from "../../Config/axiosCliente";
import Sala from "./sala";
import Swal from "sweetalert2";

const ListaSala = () => {
    const [salas, setSalas] = useState([])
    useEffect(() => {
        getSalas()
    }, [])
    const getSalas = async () => {
        const respuesta = await axiosCliente.get('/list-sala')
        setSalas(respuesta.data)
    }
    const deleteCliente = async (id) => {
        const respuesta = await axiosCliente.delete(`/delete-sala/${id}`)
            .then(response => {
                if (response.status !== 200) {
                    Swal.fire(
                        'Eliminar sala',
                        'Error al eliminar',
                        'error'
                    )
                } else {
                    Swal.fire(
                        'Eliminar sala',
                        'Eliminado correctamente',
                        'success'
                    )
                    getSalas();
                }
            })
    }
    const handleDelete = (id) => {
        Swal.fire({
            title: '¿Estas seguro?',
            text: 'Una sala no se puede recuperar',
            type: "Warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: '#d33',
            confirmButtonText: "Si, eliminar!"
        }).then((result) => {
            if (result.value) {
                deleteCliente(id)
            }
        })
    }
    return (
        <div className=" min-h-screen bg-gray-900">
            <Navbar className=" h-full" type={"sala"} />
            <section className=" h-full">


                <div className="flex justify-center items-center my-4">
                    <h1 className="  text-white text-xl   text-center">Listado de salas</h1>
                    <Link
                        type="button"
                        to="/agregarSala"
                        className=" border border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                    >
                        Agregar una sala
                    </Link>
                </div>
                <div className="flex justify-center h-max   bg-gray-900  ">
                    <div className="col-span-12 ">
                        <div className="overflow-auto lg:overflow-visible ">
                            <table className="table border-separate space-y-12 text-m ">
                                <thead className="bg-gray-800 text-gray-300 pb-4">
                                    <tr className="">
                                        <th className="p-5">Nombre</th>
                                        <th className="p-5 text-left">Capacida</th>
                                        <th className="p-5 text-left">Filas</th>
                                        <th className="p-5 text-left">Columnas</th>
                                        <th className="p-5 text-lef  ">Habilitada</th>
                                        <th className="p-5 text-left">Editar</th>
                                        <th className="p-5 text-left ">Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {salas.map((item, index) => (
                                        <Sala
                                            key={index}
                                            name={item.name}
                                            disable={item.disable}
                                            capacity={item.capacity}
                                            row={item.row}
                                            column={item.column}
                                            id={item._id}
                                            onDelete={handleDelete}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ListaSala;