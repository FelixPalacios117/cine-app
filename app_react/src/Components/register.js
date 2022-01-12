import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <Fragment>
            <div className="font-sans">
                <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
                    <div className="relative sm:max-w-sm w-full">
                        <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                        <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                        <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                            <label htmlFor='' className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                                Registro
                            </label>
                            <form method="#" action="#" className="mt-10">
                                <div>
                                <input type="text" placeholder="Nombre" className="mt-1 p-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                </div>
                                <div className='mt-5'>
                                <input type="text" placeholder="Apellido" className="mt-1 p-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                </div>
                                <div className='mt-5'>
                                    <input type="text" placeholder="Usuario" className="mt-1 p-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                </div>
                                <div className='mt-5'>
                                    <input type="email" placeholder="Correo eletronico" className="mt-1 p-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                </div>
                                <div className="mt-5">
                                    <input type="password" placeholder="Contraseña" className="mt-1 p-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                </div>
                                <div className="mt-5">
                                    <input type="password" placeholder="Contraseña" className="mt-1 p-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                </div>
                                <div className="mt-5">
                                    <input type="file" className="mt-1 p-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                </div>
                                {
                                    /*  
                                   <div className="mt-7 flex">
                                        <label htmlFor="remember_me" className="inline-flex items-center w-full cursor-pointer">
                                            <input id="remember_me" type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember"/>
                                                <span className="ml-2 text-sm text-gray-600">
                                                    Recuerdame
                                                </span>
                                        </label>
    
                                        <div className="w-full text-right">
                                            <a className="underline text-sm text-gray-600 hover:text-gray-900" href="#">
                                                ¿Olvidó su contraseña?
                                            </a>
                                        </div>
                                    </div> 
                                    */
                                }

                                <div className="mt-7">
                                    <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                        Registrarse
                                    </button>
                                </div>

                                <div className="flex mt-7 items-center text-center">
                                    <hr className="border-gray-300 border-1 w-full rounded-md" />
                                    <hr className="border-gray-300 border-1 w-full rounded-md" />
                                </div>

                                <div className="mt-7">
                                    <div className="flex justify-center items-center">
                                        <label className="mr-2" >¿Ya tienes cuenta?</label>
                                        <Link to='/login' className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                            Inicia Sesión
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    );
}

export default Register;