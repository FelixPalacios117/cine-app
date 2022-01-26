import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowFuncionComponent } from './row-funcion.component';


@NgModule({
  declarations: [RowFuncionComponent],
  imports: [
    CommonModule
  ],exports:[
    RowFuncionComponent
  ]
})
export class RowFuncionModule { }
