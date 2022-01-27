import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'listapeliculas',pathMatch:'full'},
  { path: 'login', loadChildren: () => import('./components/pages/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./components/pages/register/register.module').then(m => m.RegisterModule) },
  { path: 'listafunciones', loadChildren: () => import('./components/pages/lista-funciones/lista-funciones.module').then(m => m.ListaFuncionesModule) },
  { path: 'listapeliculas', loadChildren: () => import('./components/pages/lista-peliculas/lista-peliculas.module').then(m => m.ListaPeliculasModule) },
  { path: 'agregarpelicula', loadChildren: () => import('./components/pages/agregar-pelicula/agregar-pelicula.module').then(m => m.AgregarPeliculaModule) },
  { path: 'editarpelicula/:id', loadChildren: () => import('./components/pages/editar-pelicula/editar-pelicula.module').then(m => m.EditarPeliculaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
