import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AccountComponent } from './components/account/account.component';
import { NotificationComponent } from './components/notification/notification.component';
import { SettingComponent } from './setting.component';
import { SettingRoutingModule } from './setting-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
  declarations: [AccountComponent, NotificationComponent, SettingComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    NgZorroAntdModule,
  ],
  exports:[

  ]
})
export class SettingModule { }
