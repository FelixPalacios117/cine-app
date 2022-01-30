import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaLayoutRoutingModule } from './sala-layout-routing.module';
import { SalaLayoutComponent } from './sala-layout.component';
import { NavBarModule } from '@app/components/others/nav-bar/nav-bar.module';
import { BoxModule } from '@app/components/others/box/box.module';

@NgModule({
  declarations: [
    SalaLayoutComponent
  ],
  imports: [
    CommonModule,
    SalaLayoutRoutingModule,
    NavBarModule,
    BoxModule
  ]
})
export class SalaLayoutModule { }
