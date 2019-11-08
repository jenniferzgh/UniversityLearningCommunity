import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.less']
})
export class LoginCardComponent implements OnInit {
private userId:number;
  constructor(private router:Router) { }

  ngOnInit() {
  }

goHome(){
  let msg: NavigationExtras={
    queryParams:{'userId':this.userId},
      fragment:'anchor'
  };
this.router.navigate(['../home'],msg)
}

}
