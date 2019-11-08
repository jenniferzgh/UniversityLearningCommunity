import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionCardComponent } from './collection-card.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [ CollectionCardComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports:[
    CollectionCardComponent
  ]
})
export class CollectionCardModule { }
