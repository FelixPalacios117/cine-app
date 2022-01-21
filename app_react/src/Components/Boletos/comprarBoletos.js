import React from 'react';
import Navbar from "../../Layouts/NavBar"
import { Link } from 'react-router-dom';
import Funciones from '../Funciones/funciones';
import axiosCliente from '../../Config/axiosCliente';
import { useState,useEffect } from 'react';

const ComprarBoletos = () => {

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

  return ( 
      <div className=" min-h-screen bg-gray-900">
            <Navbar className=" h-full" type={"comprar"} />
            <section className=" h-full">


                <div className="flex justify-center items-center my-4">
                    <h1 className="  text-white text-xl   text-center">Listado de funciones</h1> 
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
                                        <th className="p-5 text-left">Seleccion</th> 
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
                                       row={item.idSala.row}
                                       column={item.idSala.column}
                                       disable={item.idSala.disable}
                                       comprados={item.comprados}
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
};

export default ComprarBoletos;
