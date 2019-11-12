import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriteArticlesRoutingModule } from './write-articles-routing.module';
import { WriteArticlesComponent } from './write-articles.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WriteArticlesRoutingModule,
    WriteArticlesComponent,






  ],
  exports:[
    WriteArticlesComponent,

  ]
})
export class WriteArticlesModule { }
