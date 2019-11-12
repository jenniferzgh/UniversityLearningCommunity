import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as wangEditor from '../../../../node_modules/wangeditor/release/wangEditor.js'
import { Router } from '@angular/router';
@Component({
  selector: 'app-write-articles',
  templateUrl: './write-articles.component.html',
  styleUrls: ['./write-articles.component.less']
})
export class WriteArticlesComponent implements OnInit {
  editor: any;
private bindFlag4:boolean;
@ViewChild('WritePopups',{static:false}) WritePopups:ElementRef;
@ViewChild('saveAsDraft',{static:false}) saveAsDraft:ElementRef;
@ViewChild('issueArtical',{static:false}) issueArtical:ElementRef;
  constructor( private router:Router) { }

  ngOnInit() {
    this.editor = new wangEditor('#editorMenu','#editor');
    this.editor.create();
  }
  onClickOutSide4(){
    this.bindFlag4=false;
    this.WritePopups.nativeElement.style.display="none";
  }

  run4(){
    this.bindFlag4=true;
    this.WritePopups.nativeElement.style.display="block";
  }
  goHome(){
    var msg="是否保存为草稿";
    if(confirm(msg)==true){
      this.RunSaveAsDraft();
    }else{
      this.router.navigate(['../home']);
    }

  }
  RunSaveAsDraft(){
    alert("保存为草稿")
  }
  RunIssueArtical(){
    alert("发布成功")
  }

}
