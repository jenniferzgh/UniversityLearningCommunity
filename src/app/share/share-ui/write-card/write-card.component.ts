import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-write-card',
  templateUrl: './write-card.component.html',
  styleUrls: ['./write-card.component.less']
})
export class WriteCardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  linkToWriteArtical(){
this.router.navigate(['../../write'])
  }

}
