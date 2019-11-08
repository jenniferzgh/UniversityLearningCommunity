import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticalCardComponent } from './artical-card.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [ArticalCardComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports:[ArticalCardComponent]
})
export class ArticalCardModule { }
