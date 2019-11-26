import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { FrontComponent } from './front.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [ FrontComponent],
  imports: [
    CommonModule,
    FrontRoutingModule,
    CoreModule
  ],
})
export class FrontModule { }
