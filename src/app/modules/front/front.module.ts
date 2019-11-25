import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { FrontComponent } from './front.component';

@NgModule({
  declarations: [ FrontComponent],
  imports: [
    CommonModule,
    FrontRoutingModule
  ],
})
export class FrontModule { }
