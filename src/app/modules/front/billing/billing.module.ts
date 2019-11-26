import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { TrackComponent } from './track/track.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [TrackComponent, CheckoutComponent],
  imports: [
    CommonModule,
    BillingRoutingModule
  ]
})
export class BillingModule { }
