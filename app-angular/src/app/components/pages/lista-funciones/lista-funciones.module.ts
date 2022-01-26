import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaFuncionesRoutingModule } from './lista-funciones-routing.module';
import { ListaFuncionesComponent } from './lista-funciones.component';
import { NavBarModule } from '../../others/nav-bar/nav-bar.module';

@NgModule({
  declarations: [
    ListaFuncionesComponent
  ],
  imports: [
    CommonModule,
    ListaFuncionesRoutingModule,
    NavBarModule
  ]
})
export class ListaFuncionesModule { }
