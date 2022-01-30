import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelecionarAsientosComponent } from './selecionar-asientos.component';

const routes: Routes = [{ path: '', component: SelecionarAsientosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelecionarAsientosRoutingModule { }
