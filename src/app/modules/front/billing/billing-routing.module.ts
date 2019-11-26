import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { TrackComponent } from './track/track.component';


const routes: Routes = [
  {
    path: 'checkout', component: CheckoutComponent
  },
  {
    path: 'track', component: TrackComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }
