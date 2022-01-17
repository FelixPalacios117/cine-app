import React, { Fragment } from "react";
import NavBar from "../../Layouts/NavBar";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axiosCliente from "../../Config/axiosCliente";
import Swal from "sweetalert2";

const AgregarSala = (props) => {
    const { register, errors, handleSubmit } = useForm();
    const onSubmit=(data)=>{
        console.log((data))  
        axiosCliente.post('/new-sala',data).
        then(res=>{  
            if(res.status===200){
                Swal.fire(
                    'Agregar sala',
                    res.data.message,
                    'success'
                )
                props.history.push('/listaSalas') 
            }else{
                Swal.fire(
                    'Agregar sala',
                    res.data.message,
                    'error'
                ) 
            } 
        })
    }
    return (
        <div className=" min-h-screen bg-gray-900">
            <NavBar type={"sala"} />
            <section className="max-w-4xl p-6 mx-auto bg-gray-700 rounded-md shadow-md dark:bg-gray-800 mt-20">
                <h1 className="text-xl font-bold text-white capitalize dark:text-white">Nueva sala</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="name">Nombre</label>
                            <input
                                name="name"
                                id="name"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                ref={register({
                                    required: { value: true, message: 'campo requerido' }
                                })} />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="capacity">Capacidad</label>
                            <input id="capacity"
                                name="capacity"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                ref={register({
                                    required: { value: true, message: 'campo requerido' }
                                })} />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="row">Filas</label>
                            <input id="row"
                                name="row"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                ref={register({
                                    required: { value: true, message: 'requerido' }
                                })} />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="column">Columnas</label>
                            <input
                                name="column"
                                id="column"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                ref={register({
                                    required: { value: true, message: 'requerido' }
                                })} />
                        </div>  
                    </div>  
                    <div className="flex justify-end mt-6">
                        <button
                            type="submit" 
                            className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                        >
                            Agregar
                        </button>
                    </div>
                </form>
            </section>

        </div>
    );
}
export default AgregarSala;