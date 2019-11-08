import { NgModule } from '@angular/core';

import { ServicesModule } from '../services/services.module';
import { PagesModule } from '../pages/pages.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NZ_I18N, zh_CN, NgZorroAntdModule } from 'ng-zorro-antd';

registerLocaleData(zh);


@NgModule({
  declarations: [],
  imports: [

    ServicesModule,
    PagesModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,

  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  exports:[
    ServicesModule,
    PagesModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ]
})
export class CoreModule { }
