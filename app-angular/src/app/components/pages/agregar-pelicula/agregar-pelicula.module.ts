import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarPeliculaRoutingModule } from './agregar-pelicula-routing.module';
import { AgregarPeliculaComponent } from './agregar-pelicula.component';
import { NavBarModule } from '@app/components/others/nav-bar/nav-bar.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AgregarPeliculaComponent
  ],
  imports: [
    CommonModule,
    AgregarPeliculaRoutingModule,
    NavBarModule,
    ReactiveFormsModule,
  ]
})
export class AgregarPeliculaModule { }
