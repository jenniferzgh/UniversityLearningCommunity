import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { WriteArticlesComponent } from './write-articles/write-articles.component';





@NgModule({
  declarations: [WriteArticlesComponent],
  imports: [

    HomeModule,
    LoginModule,


  ],
  exports:[
    HomeModule,
    LoginModule,

  ]
})
export class PagesModule { }
