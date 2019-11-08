import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artical-card',
  templateUrl: './artical-card.component.html',
  styleUrls: ['./artical-card.component.less']
})
export class ArticalCardComponent implements OnInit {

@Input() articalCardData:any;
  constructor() {

  }

  ngOnInit() {
  }

}
