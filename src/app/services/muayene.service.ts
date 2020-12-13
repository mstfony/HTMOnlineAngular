import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Muayene } from '../models/muayene';

@Injectable()
export class MuayeneService {
  constructor(private httpClient: HttpClient) {}

  path = 'https://localhost:5001/api/Muayene/GetById/';

  getMuayeneList(id: number): Observable<Muayene[]> {
    return this.httpClient.get<Muayene[]>(this.path + id);
  }
}
