import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaSalasRoutingModule } from './lista-salas-routing.module';
import { ListaSalasComponent } from './lista-salas.component';
import { NavBarModule } from '@app/components/others/nav-bar/nav-bar.module'; 

@NgModule({
  declarations: [
    ListaSalasComponent
  ],
  imports: [
    CommonModule,
    ListaSalasRoutingModule,
    NavBarModule
  ]
})
export class ListaSalasModule { }
