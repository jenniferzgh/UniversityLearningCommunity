import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { WriteArticlesComponent } from './pages/write-articles/write-articles.component';




const routes: Routes = [


  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"write",component:WriteArticlesComponent},
  {path:"",redirectTo:"login",pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
