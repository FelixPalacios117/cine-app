import Navbar from "../../Layouts/NavBar"
import { Link } from "react-router-dom"; 
import axiosCliente from "../../Config/axiosCliente";
import { useState,useEffect } from "react";
import Funciones from "./funciones";
import Swal from "sweetalert2";

const ListaFunciones = () => {
    const [funciones, setfunciones] = useState([])
    const getFunciones=async()=>{
        axiosCliente.get('/list-funcion').
         then(res=>{
             setfunciones(res.data)  
         })
    }
    useEffect(() => {
         getFunciones()
    }, [])
    const deleteCliente=async(id)=>{
        await axiosCliente.delete(`/delete-funcion/${id}`)
        .then(response=>{
            if(response.status!==200){
                Swal.fire(
                    'Eliminar funcion',
                    'Error al eliminar',
                    'error'
                )
            }else{
                Swal.fire(
                    'Eliminar funcion',
                    'Eliminado correctamente',
                    'success'
                )
                getFunciones();
            }
        })
    }
    const handleDelete=(id)=>{
        Swal.fire({
            title:'¿Estas seguro?',
            text:'Una funcion no se puede recuperar',
            type:"Warning",
            showCancelButton:true,
            confirmButtonColor:"#3085d6",
            cancelButtonColor:'#d33',
            confirmButtonText:"Si, eliminar!"
        }).then((result)=>{
          if(result.value){
            deleteCliente(id)
          }
        })
    }
    return (
        <div className=" min-h-screen bg-gray-900">
            <Navbar className=" h-full" type={"funcion"} />
            <section className=" h-full">


                <div className="flex justify-center items-center my-4">
                    <h1 className="  text-white text-xl   text-center">Listado de funciones</h1>
                    <Link
                        type="button"
                        to="/agregarFuncion"
                        className=" border border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                    >
                        Agregar una funcion
                    </Link>
                </div>
                <div className="flex justify-center h-max   bg-gray-900  ">
                    <div className="col-span-12 ">
                        <div className="overflow-auto lg:overflow-visible ">
                            <table className="table border-separate space-y-12 text-m ">
                                <thead className="bg-gray-800 text-gray-300 pb-4">
                                    <tr className=""> 
                                        <th className="p-5">Imagen</th>
                                        <th className="p-5 text-left">Sala</th> 
                                        <th className="p-5 text-left">Pelicula</th>
                                        <th className="p-5 text-left">Clasificacion</th>
                                        <th className="p-5 text-lef  ">Director</th>
                                        <th className="p-5 text-left">Duracion</th>
                                        <th className="p-5 text-left">Hora</th>
                                        <th className="p-5 text-left">Editar</th>
                                        <th className="p-5 text-left ">Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {funciones.map((item,index)=>(
                                       <Funciones
                                       sala={item.idSala.name}
                                       image={item.pelicula.picture}
                                       duracion={item.pelicula.duration}
                                       director={item.pelicula.director}
                                       clasificacion={item.pelicula.classification}
                                       pelicula={item.pelicula.name}
                                       hora={item.horario}
                                       id={item._id}
                                       key={index}
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

export default ListaFunciones;