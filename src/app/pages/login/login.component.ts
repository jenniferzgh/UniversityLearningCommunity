import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
private msg:string="学号不存在";
constructor() { }
  ngOnInit() {

  }
  checkId(){

    return true;
  }

}
