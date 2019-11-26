import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent,FooterComponent, LoginformComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[HeaderComponent,FooterComponent]
})
export class CoreModule { }
