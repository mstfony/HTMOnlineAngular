import { Kimlik } from './../models/kimlik';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class KimlikService {

constructor(private httpClient:HttpClient) { }

path="https://localhost:5001/api/Kimlik/GetById/64528373626";

getPatient():Observable<Kimlik>{
  
  return this.httpClient.get<Kimlik>(this.path);
}
  


}
