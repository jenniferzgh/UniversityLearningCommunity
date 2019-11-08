import { NgModule } from '@angular/core';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ShareModule } from 'src/app/share/share.module';
import { AnswerComponent } from './components/answer/answer.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { RecommendedModule } from './components/recommended/recommended.module';


@NgModule({
  declarations: [HomeComponent, AnswerComponent, DiscoverComponent],
  imports: [
    ShareModule,
    HomeRoutingModule,
    RecommendedModule

  ],
  exports:[ShareModule,RecommendedModule]
})
export class HomeModule { }
