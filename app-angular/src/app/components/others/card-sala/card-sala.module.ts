import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSalaComponent } from './card-sala.component';


@NgModule({
  declarations: [CardSalaComponent],
  imports: [
    CommonModule
  ],exports:[
    CardSalaComponent
  ]
})
export class CardSalaModule { }
