import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelecionarAsientosRoutingModule } from './selecionar-asientos-routing.module';
import { SelecionarAsientosComponent } from './selecionar-asientos.component';
import { NavBarModule } from '@app/components/others/nav-bar/nav-bar.module'; 
import { BoxBModule } from '@app/components/others/box-b/box-b.module';

@NgModule({
  declarations: [
    SelecionarAsientosComponent
  ],
  imports: [
    CommonModule,
    BoxBModule,
    SelecionarAsientosRoutingModule,
    NavBarModule
  ]
})
export class SelecionarAsientosModule { }
