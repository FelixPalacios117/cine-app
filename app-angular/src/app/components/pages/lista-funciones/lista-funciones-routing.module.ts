import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaFuncionesComponent } from './lista-funciones.component';

const routes: Routes = [{ path: '', component: ListaFuncionesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaFuncionesRoutingModule { }
