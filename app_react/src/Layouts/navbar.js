import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <header className="header my-8">
            <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                <div className="header-wrapper flex items-center justify-between">
                    <div className="header-logo">
                        <h1 className="font-semibold text-black leading-relaxed"><a href="">Cine</a></h1>
                    </div>

                    <div className="toggle md:hidden">
                        <button>
                            <svg className="h-6 w-6 fill-current text-black" fill="none" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <navbar className="navbar hidden md:block">
                        <ul className="flex space-x-8 text-sm font-semibold">
                            <li><Link to="/listaFunciones" className="active border-b-2 border-orange-500 pb-2">Funciones</Link></li>
                            <li><Link to="/listaPeliculas" className="hover:text-orange-500">Peliculas</Link></li>
                            <li><a href="#" className="hover:text-orange-500">Salas</a></li>
                            <li><a href="#" className="hover:text-orange-500">Compra de boletos</a></li>
                            <li><a href="#"
                                className="cta bg-orange-500 hover:bg-orange-600 px-3 py-2 rounded text-white font-normal">
                                Cerrar session</a></li>
                        </ul>
                    </navbar>

                </div>
            </div>

        </header>
    );
}

export default Navbar;