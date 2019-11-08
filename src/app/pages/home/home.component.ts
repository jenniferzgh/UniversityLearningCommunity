import { Component, OnInit, ElementRef,   Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
private StudentId:any;
bindFlag1=false;
bindFlag2=false;
@ViewChild('popupsOne',{static:true}) private popups1:ElementRef;
@ViewChild('popupsTwo',{static:true}) private popups2:ElementRef;

  constructor(public route:ActivatedRoute,private el:ElementRef, private render: Renderer2,) { }

  ngOnInit() {
    this.route.queryParams.subscribe((data) => {
      this.StudentId=data;
      console.log(this.StudentId)
    })
  }
  onClickOutSide1(){
    this.bindFlag1=false;
    this.popups1.nativeElement.style.display="none";
  }
  onClickOutSide2(){
    this.bindFlag2=false;
    this.popups2.nativeElement.style.display="none";
  }

  run1(){
    this.bindFlag2=false;
    this.bindFlag1=true;
    this.popups1.nativeElement.style.display="block";
    this.popups2.nativeElement.style.display="none";


  }
  run2(){
    this.bindFlag1=false;
    this.bindFlag2=true;
    this.popups2.nativeElement.style.display="block";
    this.popups1.nativeElement.style.display="none";
  }




}
