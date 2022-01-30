import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPeliculaComponent } from './card-pelicula.component';


@NgModule({
  declarations: [CardPeliculaComponent],
  imports: [
    CommonModule
  ],exports:[
    CardPeliculaComponent
  ]
})
export class CardPeliculaModule { }
