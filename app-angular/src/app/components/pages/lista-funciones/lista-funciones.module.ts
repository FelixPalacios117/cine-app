import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaFuncionesRoutingModule } from './lista-funciones-routing.module';
import { ListaFuncionesComponent } from './lista-funciones.component';
import { NavBarModule } from '@app/components/others/nav-bar/nav-bar.module';
import { RowFuncionModule } from '@app/components/others/row-funcion/row-funcion.module';

@NgModule({
  declarations: [
    ListaFuncionesComponent
  ],
  imports: [
    CommonModule,
    ListaFuncionesRoutingModule,
    NavBarModule,
    RowFuncionModule,
  ]
})
export class ListaFuncionesModule { }
