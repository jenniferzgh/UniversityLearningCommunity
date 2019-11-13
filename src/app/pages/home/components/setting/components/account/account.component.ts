import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DoctorinfoService } from 'src/app/services/doctorinfo.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent implements OnInit {
imgsrc='../../../../../../../assets/images/myPhoto.jpg'
private imgFile:any;
private fileSize:any;
  constructor(public _d:DomSanitizer,private doc:DoctorinfoService) { }

  ngOnInit() {
  }
  userPhotoChange(e){

  this.imgFile=e.srcElement.files[0];
  this.fileSize=this.imgFile.size;
  this.imgsrc=window.URL.createObjectURL(this.imgFile)


  }
  onSubmit(){
    let formdata:FormData = new FormData();
    formdata.append('imgFile',this.imgFile);
    if(this.imgFile !==undefined && this.imgFile !==null){
      this.doc.upImage(formdata).subscribe(res=>{
        if(res.state == '0'){
          alert('上传成功')
        }else{
          alert('上传失败')
        }
      })
    }else{
      alert('请选择图片')
    }
  }
}
