import { Injectable } from '@angular/core';
import { ServicesModule } from './services.module';

@Injectable({
  providedIn: ServicesModule
})
export class LoginServicesService {

  constructor() { }
  servicesForCheckId(){
    return true;
  }
  
}
