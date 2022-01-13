import React from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useState,useEffect } from "react";
import NavBar from "../../Layouts/NavBar";
import axiosCliente from "../../Config/axiosCliente";  
const EditarPeliculas = (props) => {
    const{id}=props.match.params
    const { register, errors, handleSubmit } = useForm();
    const [peliculas, setPeliculas] = useState({
        name:"",
        duration:"",
        director:"",
        image:null,
        classification:""
    })
    useEffect(()=>{ 
        axiosCliente.get(`/get-movie/${id}`).
        then(res=>{ 
            setPeliculas(res.data)
        })
    },[id])
    const onSubmit=(data)=>{
        const formData=new FormData() 
        formData.append('name',data.name)
        formData.append('image',data.fileupload[0])
        formData.append('duration',data.duracion)
        formData.append('classification',data.clasificacion)
        formData.append('director',data.director)
        axiosCliente.put(`/update-movie/${id}/`,formData).
        then(res=>{
            console.log(res); 
            if(res.status===200){
                Swal.fire(
                    'Modificar pelicula',
                    res.data.message,
                    'success'
                )
                props.history.push('/listaPeliculas') 
            }else{
                Swal.fire(
                    'Modificar pelicula',
                    res.data.message,
                    'error'
                ) 
            } 
        })
    }
    return ( 
        <div className=" min-h-screen bg-gray-900">
        <NavBar type={"pelicula"} />
        <section className="max-w-4xl p-6 mx-auto bg-gray-700 rounded-md shadow-md dark:bg-gray-800 mt-20">
            <h1 className="text-xl font-bold text-white capitalize dark:text-white">Editar pelicula</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-white dark:text-gray-200" htmlFor="name">Nombre</label>
                        <input
                            name="name"
                            id="name"
                            type="text"
                            defaultValue={peliculas.name}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            ref={register({
                                required: { value: true, message: 'campo requerido' }
                            })} />
                    </div>

                    <div>
                        <label className="text-white dark:text-gray-200" htmlFor="clasificacion">Clasificacion</label>
                        <input id="clasificacion"
                            name="clasificacion"
                            type="text"
                            defaultValue={peliculas.classification}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            ref={register({
                                required: { value: true, message: 'campo requerido' }
                            })} />
                    </div>

                    <div>
                        <label className="text-white dark:text-gray-200" htmlFor="director">Director</label>
                        <input id="director"
                            name="director"
                            type="text"
                            defaultValue={peliculas.director}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            ref={register({
                                required: { value: true, message: 'este campo es requerido' }
                            })} />
                    </div>

                    <div>
                        <label className="text-white dark:text-gray-200" htmlFor="duracion">Duracion</label>
                        <input
                            name="duracion"
                            id="duracion"
                            defaultValue={peliculas.duration}
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            ref={register({
                                required: { value: true, message: 'requerido' }
                            })} />
                    </div>

                </div>
                <div  className="w-2/12 m-5 flex justify-center items-center">
                        <img className="" src={`http://localhost:9090/uploads/${peliculas.picture}`}/>
                </div>
                <div className=" w-full">
                    <label className="block text-sm font-medium text-white">
                        Image
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="flex text-sm text-gray-600">
                                <label htmlFor="fileupload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                    <span className="">Upload a file</span>
                                    <input id="fileupload"
                                     name="fileupload" 
                                     type="file" 
                                     className="sr-only"
                                     ref={register({
                                        required: { value: true, message: 'requerido' }
                                    })} />
                                </label>
                                <p className="pl-1 text-white">or drag and drop</p>
                            </div>
                            <p className="text-xs text-white">
                                PNG, JPG, GIF up to 10MB
                            </p>
                        </div>
                    </div>
                </div>
                <h1 className=" text-red-400">{errors?.director?.message}</h1> 
                <div className="flex justify-end mt-6">
                    <button
                        type="submit" 
                        className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                    >
                        Agregar
                    </button>
                </div>
            </form>
        </section>

    </div>
     );
}
 
export default EditarPeliculas;