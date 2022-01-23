import React from "react";
import { Route,BrowserRouter as Router} from "react-router-dom"; 
import Login from "./Components/login";
import Register from "./Components/register";
import Main from "./Components/main";
import ListaFunciones from "./Components/Funciones/listaFunciones";
import ListaPeliculas from "./Components/Peliculas/listaPeliculas";
import AgregarPelicula from "./Components/Peliculas/agregarPelicula";
import EditarPeliculas from "./Components/Peliculas/editarPeliculas";
import ListaSala from "./Components/Salas/listaSala";
import AgregarSala from "./Components/Salas/agregarSala";
import EditarSala from "./Components/Salas/editarSala";
import SalaLayout from "./Components/Salas/salaLayout";
import AgregarFunciones from "./Components/Funciones/agregarFunciones";
import EditarFunciones from "./Components/Funciones/editarFunciones";
import ComprarBoletos from "./Components/Boletos/comprarBoletos";
import SeleccionarAsientos from "./Components/Boletos/seleccionarAsientos";

const Routes=()=>(
    <Router>
        <Route exact path="/" component={Login}/> 
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/> 
        <Route path="/main" component={ListaFunciones}/>
        <Route path="/ListaFunciones" component={ListaFunciones}/>
        <Route path="/agregarFuncion" component={AgregarFunciones}/>
        <Route path="/listaPeliculas" component={ListaPeliculas}/>
        <Route path="/agregarPelicula" component={AgregarPelicula}/>
        <Route path="/editarPeliculas/:id" component={EditarPeliculas}/>
        <Route path="/listaSalas" component={ListaSala}/>
        <Route path="/agregarSala" component={AgregarSala}/>
        <Route path="/editarSalas/:id" component={EditarSala}/>
        <Route path="/salaLayout/:id/:row/:column" component={SalaLayout}/>
        <Route path="/editarFuncion/:id" component={EditarFunciones}/>
        <Route path="/comprarBoletos/" component={ComprarBoletos}/>
        <Route path="/seleccionarAsientos/:id/:row/:column/:disable/:comprados" component={SeleccionarAsientos}/>
    </Router>
)
export default Routes;