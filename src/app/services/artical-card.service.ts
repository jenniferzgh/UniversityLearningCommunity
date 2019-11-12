import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { articalCardData } from './data-type/comment.type';
import { ServicesModule, API_CONFIG } from './services.module';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: ServicesModule
})
export class ArticalCardService {
private CheckResult:any;
  constructor(private http:HttpClient,@Inject(API_CONFIG) private uri:string,) {

   }
   getArticalCardData():Observable<articalCardData[]>{
    return this.http.get(this.uri+'articalCard')
    .pipe(map((res:articalCardData[])=> res))
   }

}
