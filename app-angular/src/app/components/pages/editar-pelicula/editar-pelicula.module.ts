import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarPeliculaRoutingModule } from './editar-pelicula-routing.module';
import { EditarPeliculaComponent } from './editar-pelicula.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarModule } from '@app/components/others/nav-bar/nav-bar.module';

@NgModule({
  declarations: [
    EditarPeliculaComponent
  ],
  imports: [
    CommonModule,
    EditarPeliculaRoutingModule,
    ReactiveFormsModule,
    NavBarModule,
  ]
})
export class EditarPeliculaModule { }
