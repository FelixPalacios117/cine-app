import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarFuncionRoutingModule } from './agregar-funcion-routing.module';
import { AgregarFuncionComponent } from './agregar-funcion.component';
import { CardPeliculaModule } from '@app/components/others/card-pelicula/card-pelicula.module';
import { CardSalaModule } from '@app/components/others/card-sala/card-sala.module';
import { NavBarModule } from '@app/components/others/nav-bar/nav-bar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AgregarFuncionComponent
  ],
  imports: [
    CommonModule,
    AgregarFuncionRoutingModule,
    CardSalaModule,
    CardPeliculaModule,
    NavBarModule,
    FormsModule,
  ]
})
export class AgregarFuncionModule { }
