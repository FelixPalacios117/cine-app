import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarPeliculaComponent } from './agregar-pelicula.component';

const routes: Routes = [{ path: '', component: AgregarPeliculaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgregarPeliculaRoutingModule { }
