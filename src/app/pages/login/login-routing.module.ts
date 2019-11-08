import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginCardComponent } from './components/login-card/login-card.component';


const routes: Routes = [
  {path:"login",component:LoginComponent,children:[
    {path:"loginCard",component:LoginCardComponent},
    {path:"",redirectTo:"loginCard",pathMatch:"full"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
