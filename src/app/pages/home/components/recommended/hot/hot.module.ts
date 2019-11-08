import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotRoutingModule } from './hot-routing.module';
import { HotComponent } from './hot.component';


@NgModule({
  declarations: [HotComponent],
  imports: [
    CommonModule,
    HotRoutingModule
  ]
})
export class HotModule { }
