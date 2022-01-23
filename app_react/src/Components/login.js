import React, { Fragment,useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import axiosCliente from "../Config/axiosCliente";
import Swal from 'sweetalert2';
import { useJwt } from "react-jwt";

const Login = (props) => {
    const token =localStorage.getItem('token')
    const { decodedToken, isExpired } = useJwt(token);
    useEffect(()=>{
        console.log(token,isExpired )
        if(token && !isExpired){ 
            Swal.fire( 
                "Error",
                "Ya tienes una sesion iniciada",
                'error'
            )
            props.history.push('/main')
        }else{
            localStorage.removeItem('token')
        }
    },[])
    const [usuario,setUsuario]=useState({
        username:'',
        password:''
    })
    const handleIniciar=(e)=>{
        e.preventDefault()
        const cliente=axiosCliente.post('/login-customer',usuario).
        then(res=>{  
            if(res.status!==200){
                Swal.fire(
                    'Error al iniciar sesion',
                    res.data.message,
                    'error'
                )
            }else{
                Swal.fire(
                    'Iniciar sesion',
                    res.data.message,
                    'success'
                )
            console.log(res.data.token)
            localStorage.setItem('token',res.data.token)
            console.log(localStorage.getItem('token'))
            props.history.push('/main')
            }  
        });
    }
    const handleInput=(e)=>{
        setUsuario({
            ...usuario,
            [e.target.name]:e.target.value
        })
    }
    return (
        <Fragment>
            <div className="font-sans">
                <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
                    <div className="relative sm:max-w-sm w-full">
                        <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                        <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                        <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                            <label htmlFor='' className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                                Login
                            </label>
                            <form method="#" action="#" className="mt-10">

                                <div>
                                    <input type="text" name="username" onChange={handleInput} placeholder="Usuario" className="mt-1 p-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>
                                </div>

                                <div className="mt-7">
                                    <input type="password" name="password" onChange={handleInput} placeholder="Contraseña" className="mt-1 p-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>
                                </div> 

                                <div className="mt-7">
                                    <button 
                                    type="submit"
                                    onClick={handleIniciar}
                                    className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                        Iniciar sesion
                                    </button>
                                </div>

                                <div className="flex mt-7 items-center text-center">
                                    <hr className="border-gray-300 border-1 w-full rounded-md"/>
                                        <hr className="border-gray-300 border-1 w-full rounded-md"/>
                                        </div>

                                        <div className="mt-7">
                                            <div className="flex justify-center items-center">
                                                <label className="mr-2" >¿Eres nuevo?</label>
                                                 <Link to="/register" className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                                    Crear una cuenta
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

export default Login;