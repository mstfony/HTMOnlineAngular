import { HttpClient } from '@angular/common/http';
import { Doktor } from './../models/doktor';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DoktorService {
  constructor(private httpClient: HttpClient) {}

  path = 'https://localhost:5001/api/Doktor';

  getDoktors(): Observable<Doktor[]> {
    return this.httpClient.get<Doktor[]>(this.path+"/GetDoktors");
  }

  getDoktorById(id:number): Observable<Doktor[]> {
    return this.httpClient.get<Doktor[]>(this.path+"/GetDoktorById/"+id);
  }
}
