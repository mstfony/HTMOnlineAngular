import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Doktor } from './../models/doktor';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DoktorService {
  constructor(private httpClient: HttpClient) {}

  path = environment.path+'/Doktor';

  getDoktors(): Observable<Doktor[]> {
    let headers=new HttpHeaders();
    headers=headers.append("Content-Type","application/json");
    headers=headers.append("Authorization","Bearer "+localStorage.getItem('token'))
    return this.httpClient.get<Doktor[]>(this.path+"/GetDoktors",{headers:headers});
  }

  getDoktorById(id:number): Observable<Doktor[]> {
    let headers=new HttpHeaders();
    headers=headers.append("Content-Type","application/json");
    headers=headers.append("Authorization","Bearer "+localStorage.getItem('token'))
    return this.httpClient.get<Doktor[]>(this.path+"/GetDoktorById/"+id,{headers:headers});
  }
}
