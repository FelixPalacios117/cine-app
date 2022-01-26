import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPeliculasComponent } from './lista-peliculas.component';

const routes: Routes = [{ path: '', component: ListaPeliculasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaPeliculasRoutingModule { }
