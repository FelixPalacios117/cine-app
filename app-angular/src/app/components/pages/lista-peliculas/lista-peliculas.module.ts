import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaPeliculasRoutingModule } from './lista-peliculas-routing.module';
import { ListaPeliculasComponent } from './lista-peliculas.component';
import { NavBarModule } from '@app/components/others/nav-bar/nav-bar.module';

@NgModule({
  declarations: [
    ListaPeliculasComponent
  ],
  imports: [
    CommonModule,
    ListaPeliculasRoutingModule,
    NavBarModule
  ]
})
export class ListaPeliculasModule { }
