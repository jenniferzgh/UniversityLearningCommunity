import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Jsonmodel } from './data-type/comment.type';
import { ServicesModule, API_CONFIG } from './services.module';
import { catchError } from 'rxjs/internal/operators';

@Injectable({
  providedIn: ServicesModule
})
export class DoctorinfoService {

  constructor(private http:HttpClient,@Inject(API_CONFIG) private uri:string) { }
  public upImage(formdata:FormData):Observable<Jsonmodel>{
    const token=localStorage.getItem('token');

const headers = new HttpHeaders({'Authorization':'Bearer'+token,'X-Request-With':'XMLHttpRequest'});
return this.http.post<Jsonmodel>(this.uri+'upImage',formdata,{headers:headers}).pipe(
  catchError((err:HttpErrorResponse)=>{
    return throwError(err.message)
  })
)
  }
}
