import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriteCardComponent } from './write-card.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [WriteCardComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports:[
    WriteCardComponent,

  ]
})
export class WriteCardModule { }
