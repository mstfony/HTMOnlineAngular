import { Laboratuvar } from './../models/laboratuvar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LabsonucService {

constructor(private httpClient : HttpClient) { }
path = 'https://localhost:5001/api/Laboratuvar/GetById/';

getLabSonuc(id: number): Observable<Laboratuvar[]> {
  return this.httpClient.get<Laboratuvar[]>(this.path+id);
}
}
