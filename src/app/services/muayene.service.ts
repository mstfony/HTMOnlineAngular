import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Muayene } from '../models/muayene';

@Injectable()
export class MuayeneService {
  constructor(private httpClient: HttpClient) {}

  path = environment.path+'/Muayene/GetById/';

  getMuayeneList(id: number): Observable<Muayene[]> {
    let headers=new HttpHeaders();
    headers=headers.append("Content-Type","application/json");
    headers=headers.append("Authorization","Bearer "+localStorage.getItem('token'))
    return this.httpClient.get<Muayene[]>(this.path + id,{headers:headers});
  }
}
