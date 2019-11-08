import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WriteArticlesComponent } from './write-articles.component';


const routes: Routes = [
  {path:"write",component:WriteArticlesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WriteArticlesRoutingModule { }
