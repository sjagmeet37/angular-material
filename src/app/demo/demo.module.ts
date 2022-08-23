import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonComponent } from './button/button.component';
import { MaterialModule } from '../shared/material/material.module';
import { FlexboxComponent } from './flexbox/flexbox.component';


@NgModule({
  declarations: [
    ButtonComponent,
    FlexboxComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    MaterialModule
  ]
})
export class DemoModule  {

}
