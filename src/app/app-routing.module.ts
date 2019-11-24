import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontEndComponent } from './front-end/front-end.component';
import { HomeFrontComponent } from './front-end/home-front/home-front.component';
import { BackEndComponent } from './back-end/back-end.component';
import { HomeBackComponent } from './back-end/home-back/home-back.component';

const routes: Routes = [
  {path: '', redirectTo: 'crm/home', pathMatch: 'full'},
  {path: 'crm', redirectTo: 'crm/home', pathMatch: 'full'},
  {path: 'crm-back-end', redirectTo: 'crm-back-end/home-back', pathMatch: 'full'},

    // Front office paths
  {path: 'crm', component: FrontEndComponent, children: [
      {path: 'home',
          component: HomeFrontComponent}
          
  ]},
  //back paths
  {path: 'crm-back-end', component: BackEndComponent, children: [
    {path: 'home-back',
        component: HomeBackComponent}
]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
