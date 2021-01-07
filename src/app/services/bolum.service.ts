import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bolum } from '../models/bolum';

@Injectable()
export class BolumService {

constructor(private httpClient:HttpClient) { }

path=environment.path+"/Bolum/GetBolumList";

getDepartments():Observable<Bolum[]>{
  let headers=new HttpHeaders();
    headers=headers.append("Content-Type","application/json");
    headers=headers.append("Authorization","Bearer "+localStorage.getItem('token'))
  return this.httpClient.get<Bolum[]>(this.path,{headers:headers});
}

}
