import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarFuncionComponent } from './agregar-funcion.component';

const routes: Routes = [{ path: '', component: AgregarFuncionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgregarFuncionRoutingModule { }
