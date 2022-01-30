import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxBComponent } from './box-b.component';


@NgModule({
  declarations: [BoxBComponent],
  imports: [
    CommonModule
  ],exports:[
    BoxBComponent
  ]
})
export class BoxBModule { }
