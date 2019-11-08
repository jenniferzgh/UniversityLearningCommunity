import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { LoginCardComponent } from './components/login-card/login-card.component';
import { FormsModule } from '@angular/forms';
import { NextTabDirective } from 'src/app/share/ccDirective/next-tab.directive';




@NgModule({
  declarations: [
    LoginComponent,
    LoginCardComponent,
    NextTabDirective

  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
  exports:[
    LoginComponent,
    LoginCardComponent,
    FormsModule,
    NextTabDirective

  ]
})
export class LoginModule { }
