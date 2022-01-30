import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSalasComponent } from './lista-salas.component';

const routes: Routes = [{ path: '', component: ListaSalasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaSalasRoutingModule { }
