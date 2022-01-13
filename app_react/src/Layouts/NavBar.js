import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const NavBar = (props) => {
    let page = props.type;
    return (
        <header className="header py-6 bg-gray-300">
            <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                <div className="header-wrapper flex items-center justify-between">
                    <div className="header-logo">
                        <h1 className="font-semibold text-black leading-relaxed"><Link to="/main">Cine</Link></h1>
                    </div>

                    <div className="toggle md:hidden">
                        <button>
                            <svg className="h-6 w-6 fill-current text-black" fill="none" strokeLinecap="round"
                                strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <nav className="navbar hidden md:block">
                        <ul className="flex space-x-8 text-sm font-semibold">
                            <li><NavLink to="/listaFunciones" className={` border-orange-500 pb-2 ${page === "funcion" ? "border-b-2 " : " "}`} >Funciones</NavLink></li>
                            <li><NavLink to="/listaPeliculas" className={` border-orange-500 pb-2 ${page === "pelicula" ? "border-b-2" : " "}`}>Peliculas</NavLink></li>
                            <li><NavLink to="/listaSalas" className={`border-orange-500 pb-2 ${page === 'sala' ? "border-b-2" : " "}`}>Salas</NavLink></li>
                            <li><NavLink to="/boletos" className={` border-orange-500 pb-2 ${page === 'boleto' ? "border-b-2" : " "}`}>Compra de boletos</NavLink></li>
                            <li><NavLink to="/cerrar" className="cta bg-orange-500 hover:bg-orange-600 px-3 py-2 rounded text-white font-normal">Cerrar sesion</NavLink></li>
                        </ul>
                    </nav>

                </div>
            </div>

        </header>
    );
}

export default NavBar;