import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.less']
})
export class LoginCardComponent implements OnInit {
@Input() checkId:any;
@ViewChild('InputPwd', {static:true}) InputPwd:ElementRef;
@ViewChild('SermitBtn',{static:true}) SermitBtn:ElementRef;
private suggestive:any;
private userId:any="";

  constructor(private router:Router,private eleRef:ElementRef) { }

  ngOnInit() {
  }



goHome(){
  if(this.checkId()){
    let msg: NavigationExtras={
      queryParams:{'userId':this.userId},
        fragment:'anchor'
    };
    this.router.navigate(['../home'],msg)
  }else{
    this.suggestive=this.checkId();
  }
}
//视图加载完成自动获得焦点
ngAfterViewInit(){
  setTimeout(() => {
    this.eleRef.nativeElement.querySelector('.input-id').focus();
  }, 300);
}

keyUpSearch(){
  let Expression=/\D/;
  let objExp=new RegExp(Expression,"g");
  if(objExp.test(this.userId)==true){
    this.suggestive="存在非法字符，请输入正确的学号/工号"
  }else if(this.userId.length==7 || this.userId.length==12){
      this.InputPwd.nativeElement.focus();
      this.suggestive=""
  }else{
    this.suggestive="请输入正确的学号/工号"
  }
}

PwdKeyUp(){
this.SermitBtn.nativeElement.click();
}

}
