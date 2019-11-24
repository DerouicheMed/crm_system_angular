import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExempleComponent } from './exemple.component';

const routes: Routes = [
  {path:'', component:ExempleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExempleRoutingModule { }
