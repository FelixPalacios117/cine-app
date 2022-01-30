import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprarRoutingModule } from './comprar-routing.module';
import { ComprarComponent } from './comprar.component';
import { NavBarModule } from '@app/components/others/nav-bar/nav-bar.module';
import { BoxBModule } from '@app/components/others/box-b/box-b.module';
@NgModule({
  declarations: [
    ComprarComponent
  ],
  imports: [
    CommonModule,
    ComprarRoutingModule,
    NavBarModule,
    BoxBModule
  ]
})
export class ComprarModule { }
