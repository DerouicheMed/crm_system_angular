import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontComponent } from './front.component';

const routes: Routes = [
  {
    path: '',
    component: FrontComponent,
    children:[
      {
        path: '',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'billing',
        loadChildren: './billing/billing.module#BillingModule'
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
