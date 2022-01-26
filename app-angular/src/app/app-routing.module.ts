import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./components/pages/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./components/pages/register/register.module').then(m => m.RegisterModule) },
  { path: 'listaFunciones', loadChildren: () => import('./components/pages/lista-funciones/lista-funciones.module').then(m => m.ListaFuncionesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
