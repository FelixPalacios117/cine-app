import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPeliculaComponent } from './editar-pelicula.component';

const routes: Routes = [{ path: '', component: EditarPeliculaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarPeliculaRoutingModule { }
