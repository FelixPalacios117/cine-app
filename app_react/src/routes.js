import React from "react";
import { Route,BrowserRouter as Router} from "react-router-dom"; 
import Login from "./Components/login";
import Register from "./Components/register";
import Main from "./Components/main";
import ListaFunciones from "./Components/Funciones/listaFunciones";
import ListaPeliculas from "./Components/Peliculas/listaPeliculas";
import AgregarPelicula from "./Components/Peliculas/agregarPelicula";
import EditarPeliculas from "./Components/Peliculas/editarPeliculas"; 

const Routes=()=>(
    <Router>
        <Route exact path="/" component={Login}/> 
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/> 
        <Route path="/main" component={Main}/>
        <Route path="/ListaFunciones" component={ListaFunciones}/>
        <Route path="/listaPeliculas" component={ListaPeliculas}/>
        <Route path="/agregarPelicula" component={AgregarPelicula}/>
        <Route path="/editarPeliculas/:id" component={EditarPeliculas}/>
    </Router>
)
export default Routes;