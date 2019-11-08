import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WriteArticlesRoutingModule } from './write-articles-routing.module';
import { WriteArticlesComponent } from './write-articles.component';


import { QuillModule } from 'ngx-quill';
import {QuillEditorModule} from 'ngx-quill-editor'
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WriteArticlesRoutingModule,
    WriteArticlesComponent,

    QuillModule,
    QuillEditorModule


  ],
  exports:[
    WriteArticlesComponent,
    QuillModule,
  ]
})
export class WriteArticlesModule { }
