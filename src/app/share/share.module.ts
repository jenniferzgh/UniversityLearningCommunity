import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { ShareUIModule } from './share-ui/share-ui.module';
import { ClickoutsideDirective } from './directives/clickoutside.directive';




@NgModule({
  declarations: [ClickoutsideDirective],
  imports: [
    CommonModule,
    ShareUIModule,
    NgZorroAntdModule,
    FormsModule,
  ],
  exports:[
    CommonModule,
    ShareUIModule,
    NgZorroAntdModule,
    FormsModule,
    ClickoutsideDirective

  ]
})
export class ShareModule { }
