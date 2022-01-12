import React from "react";
import { Route,BrowserRouter as Router} from "react-router-dom"; 
import Login from "./Components/login";
import Register from "./Components/register";
import Main from "./Components/main";
import ListaFunciones from "./Components/Funciones/listaFunciones";
import ListaPeliculas from "./Components/Peliculas/listaPeliculas";

const Routes=()=>(
    <Router>
        <Route exact path="/" component={Login}/> 
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/> 
        <Route exact path="/main" component={Main}/>
        <Route exact path="/listaPeliculas" component={ListaPeliculas}/>\
        <Route exact path="/ListaFunciones" component={ListaFunciones}/>
    </Router>
)
export default Routes;