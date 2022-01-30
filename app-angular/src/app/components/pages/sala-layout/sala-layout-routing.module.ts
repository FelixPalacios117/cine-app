import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalaLayoutComponent } from './sala-layout.component';

const routes: Routes = [{ path: '', component: SalaLayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaLayoutRoutingModule { }
