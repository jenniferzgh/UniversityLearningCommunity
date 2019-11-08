import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionCardComponent } from './collection-card/collection-card.component';
import { ArticalCardComponent } from './artical-card/artical-card.component';
import { WriteCardModule } from './write-card/write-card.module';
import { CollectionCardModule } from './collection-card/collection-card.module';
import { ArticalCardModule } from './artical-card/artical-card.module';



@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    WriteCardModule,
    CollectionCardModule,
    ArticalCardModule
  ],
  exports:[
     WriteCardModule,
     CollectionCardModule,
     ArticalCardModule
  ]
})
export class ShareUIModule { }
