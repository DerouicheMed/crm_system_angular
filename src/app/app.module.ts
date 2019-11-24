import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExempleComponent } from './modules/exemple/exemple.component';
import { CoreModule } from './core/core.module';
import { FrontEndComponent } from './front-end/front-end.component';
import { BackEndComponent } from './back-end/back-end.component';
import { HomeFrontComponent } from './front-end/home-front/home-front.component';
import { HomeBackComponent } from './back-end/home-back/home-back.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontEndComponent,
    BackEndComponent,
    HomeFrontComponent,
    HomeBackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
