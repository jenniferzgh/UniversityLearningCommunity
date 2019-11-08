import { Component, OnInit } from '@angular/core';
import { ArticalCardService } from 'src/app/services/artical-card.service';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.less']
})
export class RecommendComponent implements OnInit {
  private articalCardData:any;
  constructor(private serve:ArticalCardService) {
    this.runGetArticalCard()
  }

  ngOnInit() {
  }

  runGetArticalCard(){
    this.serve.getArticalCardData().subscribe(res=>{
      this.articalCardData=res;
      console.log(this.articalCardData)
    });
  }

}
