import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { AnswerComponent } from './components/answer/answer.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { RecommendComponent } from './components/recommended/recommend/recommend.component';
import { HotComponent } from './components/recommended/hot/hot.component';
import { LikeComponent } from './components/recommended/like/like.component';
import { ProfessionalRelatedComponent } from './components/recommended/professional-related/professional-related.component';
import { ArticalFromMyTeacherComponent } from './components/recommended/artical-from-my-teacher/artical-from-my-teacher.component';
import { SettingComponent } from './components/setting/setting.component';
import { AccountComponent } from './components/setting/components/account/account.component';
import { NotificationComponent } from './components/setting/components/notification/notification.component';



const routes: Routes = [
  {path:"home",component:HomeComponent,children:[
    {path:"recommended",component:RecommendedComponent,
      children:[
        {path:"recommend",component:RecommendComponent},
        {path:"like",component:LikeComponent},
        {path:"ProfessionalRelated",component:ProfessionalRelatedComponent},
        {path:"ArticalFromMyTeacher",component:ArticalFromMyTeacherComponent},
        {path:"",redirectTo:"recommend",pathMatch:"full"}
      ]
  },
    {path:"answer",component:AnswerComponent},
    {path:"discover",component:DiscoverComponent},
    {path:"setting",component:SettingComponent,
      children:[
        {path:"account",component:AccountComponent},
        {path:"notification",component:NotificationComponent},
        {path:"",redirectTo:"account",pathMatch:"full"}
      ]
  },
    {path:"",redirectTo:"recommended" ,pathMatch:"full"}
  ]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
