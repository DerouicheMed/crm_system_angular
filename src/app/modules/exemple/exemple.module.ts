import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExempleRoutingModule } from './exemple-routing.module';
import { ExempleComponent } from './exemple.component';

@NgModule({
  declarations: [
    ExempleComponent
  ],
  imports: [
    CommonModule,
    ExempleRoutingModule
  ]
})
export class ExempleModule { }
