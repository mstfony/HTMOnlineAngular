import { environment } from './../../environments/environment.prod';
import { Kimlik } from './../models/kimlik';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class KimlikService {

constructor(private httpClient:HttpClient) { }

path=environment.path+"/Kimlik/GetById/37687377828";

getPatient():Observable<Kimlik>{
  
  return this.httpClient.get<Kimlik>(this.path);
}
  


}
