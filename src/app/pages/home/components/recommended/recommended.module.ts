import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendedRoutingModule } from './recommended-routing.module';
import { HotComponent } from './hot/hot.component';
import { LikeComponent } from './like/like.component';
import { RecommendComponent } from './recommend/recommend.component';
import { RecommendedComponent } from './recommended.component';
import { ShareModule } from 'src/app/share/share.module';
import { ProfessionalRelatedComponent } from './professional-related/professional-related.component';
import { ArticalFromMyTeacherComponent } from './artical-from-my-teacher/artical-from-my-teacher.component';




@NgModule({
  declarations: [
    LikeComponent,
    RecommendComponent,
  RecommendedComponent,
  ProfessionalRelatedComponent,
  ArticalFromMyTeacherComponent],
  imports: [
    CommonModule,
    RecommendedRoutingModule,
    ShareModule


  ],
  exports:[
    LikeComponent,
    RecommendComponent,
    RecommendedComponent,
    ProfessionalRelatedComponent,
    ArticalFromMyTeacherComponent,
    ShareModule
 ]

})
export class RecommendedModule { }
